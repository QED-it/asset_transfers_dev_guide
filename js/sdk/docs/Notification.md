# QeditAssetTransfers.Notification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique identifier of the notification. Can be used for pagination purposes. | 
**createdAt** | **Date** | Timestamp the notification was created at, in RFC-3339 format. | 
**walletId** | **String** | The ID of the wallet the notification relates to. May be null in cases there is no such specific wallet. | [optional] 
**taskId** | **String** | The ID of the task the notification relates to. May be empty in cases there is no such specific task. | 
**notificationType** | [**NotificationType**](NotificationType.md) |  | 
**content** | **Object** |  | [optional] 


