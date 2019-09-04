# QedItAssetTransfers.AnalyticsRuleDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicKey** | **String** | The public key of the Wallet that is being granted rights in this Rule | [optional] 
**isAdmin** | **Boolean** | Boolean signifying whether the Rule grants admin rights | [optional] 
**canIssueAssetIdFirst** | **Number** | The lower Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | [optional] 
**canIssueAssetIdLast** | **Number** | The upper Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | [optional] 
**canIssueConfidentially** | **Boolean** | Boolean signifying whether the Rule grants confidentialy issuance rights; if true, then both public and confidential issuance right are granted; if false, then only public issuance rights are granted | [optional] 


