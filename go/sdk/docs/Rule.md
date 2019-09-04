# Rule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | **string** | The public key of the Wallet that is being granted rights in this Rule | 
**IsAdmin** | **bool** | Boolean signifying whether the Rule grants admin rights | 
**CanIssueAssetIdFirst** | **int32** | The lower Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | 
**CanIssueAssetIdLast** | **int32** | The upper Asset ID in the range of IDs the Rule grants issuance rights for (range is inclusive) | 
**CanIssueConfidentially** | **bool** | Boolean signifying whether the Rule grants confidentialy issuance rights; if true, then both public and confidential issuance right are granted; if false, then only public issuance rights are granted | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


