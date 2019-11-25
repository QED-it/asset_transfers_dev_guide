# GetSyncStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_sync** | **bool** | Boolean signifying whether the QEDIT Node is in sync with the Blockchain; false if the Node is not synced; sync is defined as having less than a preconfigured difference between the current Blockchain height and the last block processed by the Node; the allowed difference defaults to 5, but can be configured when setting up the Node | [optional] 
**blockchain_block_height** | **int** | The current block height of the Blockchain | [optional] 
**last_processed_block_height** | **int** | The height of the last block that was processed in the Node | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


