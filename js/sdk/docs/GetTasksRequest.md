# QeditAssetTransfers.GetTasksRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startIndex** | **Number** | An offset used to paginate through the Task list; indexing is 0-based | 
**numberOfResults** | **Number** | Maximal number of results to fetch in this call | 
**types** | [**[TaskType]**](TaskType.md) | Types of Tasks to fetch; fetch all types if omitted | [optional] 
**results** | [**[Result]**](Result.md) | List of results (statuses) to filter by; fetch in_progress tasks if omitted | [optional] 
**order** | [**OrderEnum**](OrderEnum.md) |  | [optional] 


