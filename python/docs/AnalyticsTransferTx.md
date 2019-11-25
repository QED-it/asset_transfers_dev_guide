# AnalyticsTransferTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spends** | [**list[AnalyticsSpendDescription]**](AnalyticsSpendDescription.md) | The information and Proofs associated with the Assets spent in the Transfer | [optional] 
**outputs** | [**list[AnalyticsOutputDescription]**](AnalyticsOutputDescription.md) | The information and Proofs associated with the Assets output from the Transfer | [optional] 
**rk** | **str** | The re-randomized public key of the Wallet which created the Transfer | [optional] 
**spend_auth_sig** | **str** | The signature authorizing the spend of the Assets spent in the Transfer | [optional] 
**binding_sig** | **str** | The signature binding the spent and output Assets and verifying the balance | [optional] 
**confirmation_sig** | **str** | The signature of the confirming party if a confirmation was requested; empty if no confirmation was requested | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


