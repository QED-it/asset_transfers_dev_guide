# IssueAssetRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **str** | The ID of the Wallet that has the required Issuance privileges | 
**authorization** | **str** | The authorization password for the Wallet that has the Issuance privileges | 
**recipient_address** | **str** | The Address of the recipient of the issued Assets | 
**asset_id** | **str** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | 
**amount** | **int** | the amount of Assets to issue | 
**confidential** | **bool** | Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public | 
**memo** | **str** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


