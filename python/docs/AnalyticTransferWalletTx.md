# AnalyticTransferWalletTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_incoming** | **bool** | Boolean signifying whether the Assets were transferred to the Wallet in question; false of the Assets were transferred from the Wallet into another | [optional] 
**sender_id** | **str** | The public key of the Wallet the Assets were transferred from | [optional] 
**recipient_address** | **str** | The address of the Wallet the Assets were transferred to | [optional] 
**confirmed_by** | **str** | The public key of the Wallet that confirmed receipt of this transfer | [optional] 
**asset_id** | **str** | The ID of an Asset Type. It must be a string of length 0 to 40 characters. Allowed characters are lower- and uppercase letters, digits, dot (.), and hyphen (-). It must not end with an hyphen. Asset IDs are case-sensitive.  | [optional] 
**amount** | **int** | The amount of Assets transferred | [optional] 
**memo** | **str** | The private memo attached to the Transfer | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


