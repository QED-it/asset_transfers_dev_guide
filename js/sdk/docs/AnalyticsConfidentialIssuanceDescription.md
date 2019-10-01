# QedItAssetTransfers.AnalyticsConfidentialIssuanceDescription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**casset** | **String** | The commitment to both the Asset Type and amount of the issued Note | [optional] 
**namespace** | **String** | A &#x60;Namespace&#x60; describes what Asset IDs can be issued in an Issuance Rule. It is a string in the same format as &#x60;AssetId&#x60;. Additionally, if it ends with a wildcard character &#x60;*&#x60;, then the namespace covers all asset IDs with the namespace as a prefix. Without a final wildcard, the namespace covers exactly one asset ID. Example: The namespace &#x60;currencies.dollar&#x60; covers only this exact asset type, while &#x60;currencies.*&#x60; covers all asset types that start with &#x60;currencies.&#x60;.  | [optional] 
**zkproof** | **String** | The Proof that the issued Asset Type indeed matches the reported Rule | [optional] 


