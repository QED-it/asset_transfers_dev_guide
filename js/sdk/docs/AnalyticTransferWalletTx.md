# QedItAssetTransfers.AnalyticTransferWalletTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isIncoming** | **Boolean** | Boolean signifying whether the Assets were transferred to the Wallet in question; false of the Assets were transferred from the Wallet into another | [optional] 
**senderId** | **String** | The public key of the Wallet the Assets were transferred from | [optional] 
**recipientAddress** | **String** | The address of the Wallet the Assets were transferred to | [optional] 
**assetId** | **String** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | [optional] 
**amount** | **Number** | The amount of Assets transferred | [optional] 
**memo** | **String** | The private memo attached to the Transfer | [optional] 


