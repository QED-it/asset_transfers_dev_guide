# QeditAssetTransfers.GetNotificationsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | Fetch notifications that relate to this wallet ID only | [optional] 
**types** | [**[NotificationType]**](NotificationType.md) |  | [optional] 
**startingWithTime** | **Date** | Fetch notifications reported at this timestamp or later/earlier. Later notifications will be fetched if the order is ascending, and earlier ones if the order is descending. The timestamp is expected to be in RFC-3339 format. | [optional] 
**afterId** | **Number** | Fetch notifications after this given ID (not including the notification with the given ID). This is meant to facilitate pagination. Later notifications will be fetched if ascending order is selected, and earlier ones if descending order is selected. Warning - do not assume anything about the implementation of after_id; the values of the ID are intended to be copy-pasted from retrieved notifications for pagination. | [optional] 
**order** | [**OrderEnum**](OrderEnum.md) |  | [optional] 
**maxResults** | **Number** | The maximal number of results to fetch | [optional] [default to 100]


