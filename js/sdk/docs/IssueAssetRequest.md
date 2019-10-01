# QedItAssetTransfers.IssueAssetRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | The ID of the Wallet that has the required Issuance privileges | 
**authorization** | **String** | The authorization password for the Wallet that has the Issuance privileges | 
**recipientAddress** | **String** | The Address of the recipient of the issued Assets | 
**assetId** | **String** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | 
**amount** | **Number** | the amount of Assets to issue | 
**confidential** | **Boolean** | Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public | 
**memo** | **String** |  | 


