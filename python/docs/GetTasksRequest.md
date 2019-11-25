# GetTasksRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_index** | **int** | An offset used to paginate through the Task list; indexing is 0-based | 
**number_of_results** | **int** | Maximal number of results to fetch in this call | 
**types** | [**list[TaskType]**](TaskType.md) | Types of Tasks to fetch; fetch all types if omitted | [optional] 
**results** | [**list[Result]**](Result.md) | List of results (statuses) to filter by; fetch in_progress tasks if omitted | [optional] 
**order** | [**OrderEnum**](OrderEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


