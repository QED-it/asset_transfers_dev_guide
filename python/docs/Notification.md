# Notification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier of the notification. Can be used for pagination purposes. | 
**created_at** | **date** | Timestamp the notification was created at, in RFC-3339 format. | 
**wallet_id** | **str** | The ID of the wallet the notification relates to. May be null in cases there is no such specific wallet. | [optional] 
**task_id** | **str** | The ID of the task the notification relates to. May be empty in cases there is no such specific task. | 
**notification_type** | [**NotificationType**](NotificationType.md) |  | 
**content** | **object** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


