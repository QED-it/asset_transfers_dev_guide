/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetTasksRequest struct {
	// An offset used to paginate through the Task list; indexing is 0-based
	StartIndex int32 `json:"start_index"`
	// Maximal number of results to fetch in this call
	NumberOfResults int32 `json:"number_of_results"`
	// Types of Tasks to fetch; fetch all types if omitted
	Types []TaskType `json:"types,omitempty"`
	// List of results (statuses) to filter by; fetch in_progress tasks if omitted
	Results []Result `json:"results,omitempty"`
	// Order of tasks to fetch (either ascending or descending); ordering is chronological where the time is set to when the task was created in this Node
	Order string `json:"order,omitempty"`
}
