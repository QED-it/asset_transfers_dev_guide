package util

import (
	"context"
	"fmt"
	"time"

	"github.com/QED-it/goqedit"
)

const (
	asyncTaskRetries  = 10
	asyncTaskWaitTime = time.Second * 2
)

// ErrorResponseString will return OpenAPI's model error (the original error, not the
// one that's wrapped by OpenAPI)
func ErrorResponseString(err error) string {
	if apiError, ok := err.(goqedit.GenericOpenAPIError).Model().(goqedit.ErrorResponse); ok {
		return apiError.Message
	}
	return err.Error()
}

// WaitForAsyncTaskDone waits for async tasks with ID `taskID` to be done, meaning not
// in `in_progress` or `pending` results.
// It then returns the last GetTaskStatusResponse response (the one with the complete results)
func WaitForAsyncTaskDone(ctx context.Context, taskID string, client *goqedit.APIClient) (goqedit.GetTaskStatusResponse, error) {
	var taskStatus goqedit.GetTaskStatusResponse
	taskStatusRequest := goqedit.GetTaskStatusRequest{Id: taskID}
	for i := 0; i < asyncTaskRetries; i++ {
		taskStatus, _, err := client.NodeApi.NodeGetTaskStatusPost(ctx, taskStatusRequest)
		if err != nil {
			return taskStatus, fmt.Errorf("couldn't get task status: %v", ErrorResponseString(err))
		}
		if taskStatus.Result != "pending" && taskStatus.Result != "in_progress" {
			return taskStatus, nil
		}
		fmt.Println("Waiting for task to be done")
		time.Sleep(asyncTaskWaitTime)
	}
	return taskStatus, fmt.Errorf("waiting for task timed out after %d iterations", asyncTaskRetries)
}
