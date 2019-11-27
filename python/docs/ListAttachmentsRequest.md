# ListAttachmentsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet_id** | **str** | The Node-specific identifier of the Wallet whose credentials should be used to list Attachments | 
**start_index** | **int** | An offset used to paginate through the Attachment list; indexing is 0-based; defaults to 0 | [optional] 
**number_of_results** | **int** | Maximal number of results to fetch in this call; defaults to 100 | [optional] 
**asset_ids** | **list[str]** | An optional list of Asset IDs; if present and not empty, only Attachments attached to Assets of one or more of the given Asset IDs will be returned; note that only Attachments attached to Assets owned or previously-owned by the given Wallet will be returned | [optional] 
**tx_hashes** | **list[str]** | An optional list of Transaction hashes; if present and not empty, only Attachments attached to Assets transferred or created in the referenced Transations will be returned; note that only Attachments from Transactions that are visible to the given Wallet will be returned | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


