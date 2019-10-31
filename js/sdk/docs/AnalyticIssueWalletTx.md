# QeditAssetTransfers.AnalyticIssueWalletTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isIncoming** | **Boolean** | Boolean signifying whether the Assets were issued to the Wallet in question | [optional] 
**issuedBySelf** | **Boolean** | Boolean signifying whether the Wallet used to issue the Assets is the Wallet in question | [optional] 
**senderId** | **String** | The public key of the Wallet that was used to issue the Assets | [optional] 
**recipientAddress** | **String** | The Address the Assets were issued to | [optional] 
**assetId** | **String** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | [optional] 
**amount** | **Number** | The amount of Assets issued | [optional] 
**isConfidential** | **Boolean** | Boolean signifying whether the Issuance was done confidentially | [optional] 
**memo** | **String** | The private memo attached to the Issuance | [optional] 


