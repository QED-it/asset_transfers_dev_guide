# TransferAssetRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **str** | The ID of the Wallet to transfer from | 
**authorization** | **str** | The authorization password for the Wallet to transfer from | 
**recipient_address** | **str** | The Address of the recipient of the funds | 
**asset_id** | **str** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | 
**amount** | **int** | The amount of assets to transfer | 
**memo** | **str** | An app-customizable field to store additional private data relating to the transfer; the memo is shared between the sender and the receiver, but is not divulged to other parties | 
**require_confirmation_from** | **str** | A user may request confirmation from the receiving party. If a public key of the approver is included in this optional field, the transaction will only become valid after the received signs it. The receiver will be able to decide whether to accept or reject the transfer by calling the /node/approve_task or the /node/reject_task respectively. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


