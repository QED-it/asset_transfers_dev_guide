# Notification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** | The unique identifier of the notification. Can be used for pagination purposes. | 
**CreatedAt** | **string** | Timestamp the notification was created at, in RFC-3339 format. | 
**WalletId** | **string** | The ID of the wallet the notification relates to. May be null in cases there is no such specific wallet. | [optional] 
**TaskId** | **string** | The ID of the task the notification relates to. May be empty in cases there is no such specific task. | 
**NotificationType** | [**NotificationType**](NotificationType.md) |  | 
**Content** | [**map[string]interface{}**](map[string]interface{}.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


