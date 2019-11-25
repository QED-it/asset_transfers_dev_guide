# GetTaskStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID of the Task | [optional] 
**CreatedAt** | **string** | UTC time of creation of the Task in RFC-3339 format | [optional] 
**UpdatedAt** | **string** | UTC last time the Task was updated in RFC-3339 format | [optional] 
**Result** | [**Result**](Result.md) |  | [optional] 
**State** | [**TaskState**](TaskState.md) |  | [optional] 
**TxHash** | **string** | The Blockchain-generated hash of the Transaction; populated after the Blockchain Node accepted the Transaction | [optional] 
**QeditTxHash** | **string** | The QEDIT-generated hash of the Transaction; generated after proof generation, but prior to Broadcast by the QEDIT Node | [optional] 
**Type** | [**TaskType**](TaskType.md) |  | [optional] 
**Data** | [**TaskData**](TaskData.md) |  | [optional] 
**Error** | **string** | In case of failure this field reports the reason for the failure | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


