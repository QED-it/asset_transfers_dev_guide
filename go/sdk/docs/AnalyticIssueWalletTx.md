# AnalyticIssueWalletTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsIncoming** | **bool** | Boolean signifying whether the Assets were issued to the Wallet in question | [optional] 
**IssuedBySelf** | **bool** | Boolean signifying whether the Wallet used to issue the Assets is the Wallet in question | [optional] 
**SenderId** | **string** | The public key of the Wallet that was used to issue the Assets | [optional] 
**RecipientAddress** | **string** | The Address the Assets were issued to | [optional] 
**AssetId** | **string** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | [optional] 
**Amount** | **int32** | The amount of Assets issued | [optional] 
**IsConfidential** | **bool** | Boolean signifying whether the Issuance was done confidentially | [optional] 
**Memo** | **string** | The private memo attached to the Issuance | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


