# GetTasksRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartIndex** | **int32** | An offset used to paginate through the Task list; indexing is 0-based | 
**NumberOfResults** | **int32** | Maximal number of results to fetch in this call | 
**Types** | [**[]TaskType**](TaskType.md) | Types of Tasks to fetch; fetch all types if omitted | [optional] 
**Results** | [**[]Result**](Result.md) | List of results (statuses) to filter by; fetch in_progress tasks if omitted | [optional] 
**Order** | [**OrderEnum**](OrderEnum.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


