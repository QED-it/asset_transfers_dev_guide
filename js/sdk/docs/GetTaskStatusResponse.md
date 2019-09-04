# QedItAssetTransfers.GetTaskStatusResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the Task | [optional] 
**createdAt** | **Date** | UTC time of creation of the Task in RFC-3339 format | [optional] 
**updatedAt** | **Date** | UTC last time the Task was updated in RFC-3339 format | [optional] 
**result** | [**Result**](Result.md) |  | [optional] 
**state** | **String** | More granular current state of the Task; list of supported states is not guaranteed to be stable | [optional] 
**txHash** | **String** | The Blockchain-generated hash of the Transaction; populated after the Blockchain Node accepted the Transaction | [optional] 
**qeditTxHash** | **String** | The QEDIT-generated hash of the Transaction; generated after proof generation, but prior to Broadcast by the QEDIT Node | [optional] 
**type** | [**TaskType**](TaskType.md) |  | [optional] 
**data** | **Object** | Container for the Transaction data; each Transaction type has different fields | [optional] 
**error** | **String** | In case of failure this field reports the reason for the failure | [optional] 


