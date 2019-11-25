# AnalyticsRuleWalletDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | The public key of the Wallet that is being granted rights in this Rule | [optional] 
**is_admin** | **bool** | Boolean signifying whether the Rule grants admin rights | [optional] 
**namespace** | **str** | A &#x60;Namespace&#x60; describes what Asset IDs can be issued in an Issuance Rule. It is a string in the same format as &#x60;AssetId&#x60;. Additionally, if it ends with a wildcard character &#x60;*&#x60;, then the namespace covers all asset IDs with the namespace as a prefix. Without a final wildcard, the namespace covers exactly one asset ID. Example: The namespace &#x60;currencies.dollar&#x60; covers only this exact asset type, while &#x60;currencies.*&#x60; covers all asset types that start with &#x60;currencies.&#x60;.  | [optional] 
**can_issue_confidentially** | **bool** | Boolean signifying whether the Rule grants confidentialy issuance rights; if true, then both public and confidential issuance right are granted; if false, then only public issuance rights are granted | [optional] 
**operation** | **str** | Operation of the transaction, which can be rule creation or deletion | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


