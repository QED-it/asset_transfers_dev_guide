# QedItAssetTransfers.GetTasksRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startIndex** | **Number** | An offset used to paginate through the Task list; indexing is 0-based | 
**numberOfResults** | **Number** | Maximal number of results to fetch in this call | 
**types** | [**[TaskType]**](TaskType.md) | Types of Tasks to fetch; fetch all types if omitted | [optional] 
**results** | [**[Result]**](Result.md) | List of results (statuses) to filter by; fetch in_progress tasks if omitted | [optional] 
**order** | **String** | Order of tasks to fetch (either ascending or descending); ordering is chronological where the time is set to when the task was created in this Node | [optional] [default to &#39;desc&#39;]


<a name="OrderEnum"></a>
## Enum: OrderEnum


* `asc` (value: `"asc"`)

* `desc` (value: `"desc"`)




