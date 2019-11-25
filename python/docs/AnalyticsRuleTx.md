# AnalyticsRuleTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_public_key** | **str** | The public key of the Wallet used to create the Rule | [optional] 
**rules_to_add** | [**list[AnalyticsRuleDefinition]**](AnalyticsRuleDefinition.md) | The details of the Rules added in this transaction | [optional] 
**rules_to_delete** | [**list[AnalyticsRuleDefinition]**](AnalyticsRuleDefinition.md) | The details of the Rules deleted in this transaction | [optional] 
**nonce** | **int** | The nonce used to make this Rule transaction unique | [optional] 
**signature** | **str** | The signature authorizing the Rule changes, made by the Wallet that made the Rule changes | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


