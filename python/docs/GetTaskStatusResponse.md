# GetTaskStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of the Task | [optional] 
**created_at** | **date** | UTC time of creation of the Task in RFC-3339 format | [optional] 
**updated_at** | **date** | UTC last time the Task was updated in RFC-3339 format | [optional] 
**result** | [**Result**](Result.md) |  | [optional] 
**state** | [**TaskState**](TaskState.md) |  | [optional] 
**tx_hash** | **str** | The Blockchain-generated hash of the Transaction; populated after the Blockchain Node accepted the Transaction | [optional] 
**qedit_tx_hash** | **str** | The QEDIT-generated hash of the Transaction; generated after proof generation, but prior to Broadcast by the QEDIT Node | [optional] 
**type** | [**TaskType**](TaskType.md) |  | [optional] 
**data** | [**TaskData**](TaskData.md) |  | [optional] 
**error** | **str** | In case of failure this field reports the reason for the failure | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


