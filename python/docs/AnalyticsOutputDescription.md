# AnalyticsOutputDescription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cv** | **str** | The commitment to both the Asset Type and amount of the Note | [optional] 
**cm** | **str** | The commitment to the entire Note | [optional] 
**zkproof** | **str** | The Proof that the commitments match | [optional] 
**epk** | **str** | The ephemeral public key used to encrypt the Note contents for the receiver | [optional] 
**enc_note** | **str** | The Note encryption for the receiver | [optional] 
**enc_sender** | **str** | The Note encryption for the sender | [optional] 
**require_confirmation_from_rk** | **str** | The rerandomized (fully-anonymous) public key of the wallet that confirmed receipt of the output; identity of this wallet can only be recovered by the sending and confirming wallets (including view-only copies of these wallets); empty if no confirmation was requested | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


