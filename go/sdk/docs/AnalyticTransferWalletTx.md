# AnalyticTransferWalletTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsIncoming** | **bool** | Boolean signifying whether the Assets were transferred to the Wallet in question; false of the Assets were transferred from the Wallet into another | [optional] 
**SenderId** | **string** | The public key of the Wallet the Assets were transferred from | [optional] 
**RecipientAddress** | **string** | The address of the Wallet the Assets were transferred to | [optional] 
**AssetId** | **string** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | [optional] 
**Amount** | **int32** | The amount of Assets transferred | [optional] 
**Memo** | **string** | The private memo attached to the Transfer | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


