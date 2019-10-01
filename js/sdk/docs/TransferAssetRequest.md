# QedItAssetTransfers.TransferAssetRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | The ID of the Wallet to transfer from | 
**authorization** | **String** | The authorization password for the Wallet to transfer from | 
**recipientAddress** | **String** | The Address of the recipient of the funds | 
**assetId** | **String** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | 
**amount** | **Number** | The amount of assets to transfer | 
**memo** | **String** | An app-customizable field to store additional private data relating to the transfer; the memo is shared between the sender and the receiver, but is not divulged to other parties | 
**requireConfirmationFrom** | **String** | A user may request confirmation from the receiving party. If a public key of the approver is included in this optional field, the transaction will only become valid after the received signs it. The receiver will be able to decide whether to accept or reject the transfer by calling the /node/approve_task or the /node/reject_task respectively. | [optional] 


