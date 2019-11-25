# GetNotificationsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **str** | Fetch notifications that relate to this wallet ID only | [optional] 
**types** | [**list[NotificationType]**](NotificationType.md) |  | [optional] 
**starting_with_time** | **date** | Fetch notifications reported at this timestamp or later/earlier. Later notifications will be fetched if the order is ascending, and earlier ones if the order is descending. The timestamp is expected to be in RFC-3339 format. | [optional] 
**after_id** | **int** | Fetch notifications after this given ID (not including the notification with the given ID). This is meant to facilitate pagination. Later notifications will be fetched if ascending order is selected, and earlier ones if descending order is selected. Warning - do not assume anything about the implementation of after_id; the values of the ID are intended to be copy-pasted from retrieved notifications for pagination. | [optional] 
**order** | [**OrderEnum**](OrderEnum.md) |  | [optional] 
**max_results** | **int** | The maximal number of results to fetch | [optional] [default to 100]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


