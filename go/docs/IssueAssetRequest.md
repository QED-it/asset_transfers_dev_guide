# IssueAssetRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WalletId** | **string** | The ID of the Wallet that has the required Issuance privileges | 
**Authorization** | **string** | The authorization password for the Wallet that has the Issuance privileges | 
**RecipientAddress** | **string** | The Address of the recipient of the issued Assets | 
**AssetId** | **string** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | 
**Amount** | **int32** | the amount of Assets to issue | 
**Confidential** | **bool** | Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public | 
**Memo** | **string** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


