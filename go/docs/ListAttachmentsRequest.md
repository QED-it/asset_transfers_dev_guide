# ListAttachmentsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WalletId** | **string** | The Node-specific identifier of the Wallet whose credentials should be used to list Attachments | 
**StartIndex** | **int32** | An offset used to paginate through the Attachment list; indexing is 0-based; defaults to 0 | [optional] 
**NumberOfResults** | **int32** | Maximal number of results to fetch in this call; defaults to 100 | [optional] 
**AssetIds** | **[]string** | An optional list of Asset IDs; if present and not empty, only Attachments attached to Assets of one or more of the given Asset IDs will be returned; note that only Attachments attached to Assets owned or previously-owned by the given Wallet will be returned | [optional] 
**TxHashes** | **[]string** | An optional list of Transaction hashes; if present and not empty, only Attachments attached to Assets transferred or created in the referenced Transations will be returned; note that only Attachments from Transactions that are visible to the given Wallet will be returned | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


