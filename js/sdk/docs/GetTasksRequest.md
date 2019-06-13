# QedItAssetTransfers.GetTasksRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startIndex** | **Number** |  | 
**numberOfResults** | **Number** |  | 
**types** | **[String]** |  | [optional] 
**results** | **[String]** |  | [optional] 
**order** | **String** |  | [optional] [default to &#39;desc&#39;]


<a name="[TypesEnum]"></a>
## Enum: [TypesEnum]


* `unlock_wallet` (value: `"unlock_wallet"`)

* `transfer_asset` (value: `"transfer_asset"`)

* `issue_asset` (value: `"issue_asset"`)

* `alter_rule` (value: `"alter_rule"`)




<a name="[ResultsEnum]"></a>
## Enum: [ResultsEnum]


* `pending` (value: `"pending"`)

* `failure` (value: `"failure"`)

* `in_progress` (value: `"in_progress"`)

* `success` (value: `"success"`)




