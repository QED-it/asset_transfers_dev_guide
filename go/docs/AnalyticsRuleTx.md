# AnalyticsRuleTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SenderPublicKey** | **string** | The public key of the Wallet used to create the Rule | [optional] 
**RulesToAdd** | [**[]AnalyticsRuleDefinition**](AnalyticsRuleDefinition.md) | The details of the Rules added in this transaction | [optional] 
**RulesToDelete** | [**[]AnalyticsRuleDefinition**](AnalyticsRuleDefinition.md) | The details of the Rules deleted in this transaction | [optional] 
**Nonce** | **int32** | The nonce used to make this Rule transaction unique | [optional] 
**Signature** | **string** | The signature authorizing the Rule changes, made by the Wallet that made the Rule changes | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


