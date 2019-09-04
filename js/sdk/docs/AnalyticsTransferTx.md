# QedItAssetTransfers.AnalyticsTransferTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetConverterDescriptions** | [**[AnalyticsAssetConverterProofDescription]**](AnalyticsAssetConverterProofDescription.md) | The Converter Proofs | [optional] 
**spends** | [**[AnalyticsSpendDescription]**](AnalyticsSpendDescription.md) | The information and Proofs associated with the Assets spent in the Transfer | [optional] 
**outputs** | [**[AnalyticsOutputDescription]**](AnalyticsOutputDescription.md) | The information and Proofs associated with the Assets output from the Transfer | [optional] 
**rk** | **String** | The re-randomized public key of the Wallet which created the Transfer | [optional] 
**spendAuthSig** | **String** | The signature authorizing the spend of the Assets spent in the Transfer | [optional] 
**bindingSig** | **String** | The signature binding the spent and output Assets and verifying the balance | [optional] 


