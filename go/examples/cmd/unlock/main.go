package main

import (
	"context"
	"fmt"
	"time"

	"github.com/QED-it/asset_transfers_dev_guide/go/examples/util"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
)

func main() {
	client, _, err := util.InitAPIClient()
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get a valid config"))
	}

	ctx := context.Background()

	unlockRequest := sdk.UnlockWalletRequest{
		WalletLabel:   "source_wallet",
		Authorization: "PrivacyIsAwesome",
		Seconds:       600,
	}

	asyncTask, _, err := client.NodeApi.NodeUnlockWalletPost(ctx, unlockRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %s", util.ErrorResponseString(err)))
	}

	var unlockWalletTaskStatus sdk.GetTaskStatusResponse
	taskStatusRequest := sdk.GetTaskStatusRequest{Id: asyncTask.Id}
	for {
		unlockWalletTaskStatus, _, err = client.NodeApi.NodeGetTaskStatusPost(ctx, taskStatusRequest)
		if err != nil {
			util.HandleErrorAndExit(fmt.Errorf("couldn't get task status: %v", util.ErrorResponseString(err)))
		}
		if unlockWalletTaskStatus.Result != "pending" && unlockWalletTaskStatus.Result != "in_progress" {
			break
		}
		fmt.Println("Waiting for unlock wallet to be done")
		time.Sleep(time.Second * 2)
	}
	if unlockWalletTaskStatus.Result == "failure" {
		util.HandleErrorAndExit(fmt.Errorf("couldn't transfer asset: %v", unlockWalletTaskStatus.Error))
	}
}
