# AnalyticsTransferTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Spends** | [**[]AnalyticsSpendDescription**](AnalyticsSpendDescription.md) | The information and Proofs associated with the Assets spent in the Transfer | [optional] 
**Outputs** | [**[]AnalyticsOutputDescription**](AnalyticsOutputDescription.md) | The information and Proofs associated with the Assets output from the Transfer | [optional] 
**Rk** | **string** | The re-randomized public key of the Wallet which created the Transfer | [optional] 
**SpendAuthSig** | **string** | The signature authorizing the spend of the Assets spent in the Transfer | [optional] 
**BindingSig** | **string** | The signature binding the spent and output Assets and verifying the balance | [optional] 
**ConfirmationSig** | **string** | The signature of the confirming party if a confirmation was requested; empty if no confirmation was requested | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


