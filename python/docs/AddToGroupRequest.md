# AddToGroupRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **str** | The Node-specific identifier of the Wallet that is sharing the credentials for the Group | 
**group_id** | **str** | The unique identifier of the Group whose credentials will be shared | 
**read_permission** | **bool** | Boolean that should be set to true if and only if read permission should be shared. Note that write permission is always shared and there&#39;s no option for read-only permission. Defaults to false. | [optional] 
**memo** | **str** | Memo to be used by the application to define the purpose of the group and why its credentials were shared. Should include information about who is sharing the group if this information is relevant. Defaults to an empty string | [optional] 
**recipient_address** | **str** | An Address of the Wallet with which the Group credentials should be shared | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


