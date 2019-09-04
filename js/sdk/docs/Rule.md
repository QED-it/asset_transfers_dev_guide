# QedItAssetTransfers.Rule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicKey** | **String** | The public key of the Wallet that is being granted rights in this Rule | 
**isAdmin** | **Boolean** | Boolean signifying whether the Rule grants admin rights | 
**canIssueAssetIdFirst** | **Number** | The lower Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | 
**canIssueAssetIdLast** | **Number** | The upper Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | 
**canIssueConfidentially** | **Boolean** | Boolean signifying whether the Rule grants confidentialy issuance rights; if true, then both public and confidential issuance right are granted; if false, then only public issuance rights are granted | 


