# QeditAssetTransfers.AnalyticsRuleTx

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderPublicKey** | **String** | The public key of the Wallet used to create the Rule | [optional] 
**rulesToAdd** | [**[AnalyticsRuleDefinition]**](AnalyticsRuleDefinition.md) | The details of the Rules added in this transaction | [optional] 
**rulesToDelete** | [**[AnalyticsRuleDefinition]**](AnalyticsRuleDefinition.md) | The details of the Rules deleted in this transaction | [optional] 
**nonce** | **Number** | The nonce used to make this Rule transaction unique | [optional] 
**signature** | **String** | The signature authorizing the Rule changes, made by the Wallet that made the Rule changes | [optional] 


