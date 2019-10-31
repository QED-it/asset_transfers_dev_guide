# \NodeApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NodeApproveTaskPost**](NodeApi.md#NodeApproveTaskPost) | **Post** /node/approve_task | Approve task with pending incoming transaction [async call]
[**NodeCancelTaskPost**](NodeApi.md#NodeCancelTaskPost) | **Post** /node/cancel_task | Cancel task with pending incoming transaction both incoming and outgoing [async call]
[**NodeDeleteWalletPost**](NodeApi.md#NodeDeleteWalletPost) | **Post** /node/delete_wallet | Delete a Wallet [async call]
[**NodeExportAuditorAccessWalletPost**](NodeApi.md#NodeExportAuditorAccessWalletPost) | **Post** /node/export_auditor_access_wallet | Export viewing credentials for a Wallet
[**NodeExportWalletPost**](NodeApi.md#NodeExportWalletPost) | **Post** /node/export_wallet | Export wallet secret key
[**NodeGenerateWalletPost**](NodeApi.md#NodeGenerateWalletPost) | **Post** /node/generate_wallet | Generate a new Wallet
[**NodeGetAllWalletsPost**](NodeApi.md#NodeGetAllWalletsPost) | **Post** /node/get_all_wallets | Get all wallet IDs
[**NodeGetNotificationsPost**](NodeApi.md#NodeGetNotificationsPost) | **Post** /node/get_notifications | Get notifications
[**NodeGetRulesPost**](NodeApi.md#NodeGetRulesPost) | **Post** /node/get_rules | Get network governance Rules
[**NodeGetTaskStatusPost**](NodeApi.md#NodeGetTaskStatusPost) | **Post** /node/get_task_status | Get a specific task (by ID)
[**NodeGetTasksPost**](NodeApi.md#NodeGetTasksPost) | **Post** /node/get_tasks | Get a (potentially) filtered list of all Tasks
[**NodeImportAuditorAccessWalletPost**](NodeApi.md#NodeImportAuditorAccessWalletPost) | **Post** /node/import_auditor_access_wallet | Import viewing credentials for a Wallet [async call]
[**NodeImportWalletPost**](NodeApi.md#NodeImportWalletPost) | **Post** /node/import_wallet | Import Wallet from a known secret key and authorization [async call]
[**NodeUnlockWalletPost**](NodeApi.md#NodeUnlockWalletPost) | **Post** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds [async call]


# **NodeApproveTaskPost**
> NodeApproveTaskPost(ctx, taskActionRequest)
Approve task with pending incoming transaction [async call]

Confirmation request tasks are confirmed using this point. After the user confirms the incoming transaction, it is asynchronously sent to the blockchain and its status can be queried like any other async task.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **taskActionRequest** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeCancelTaskPost**
> NodeCancelTaskPost(ctx, taskActionRequest)
Cancel task with pending incoming transaction both incoming and outgoing [async call]

A user may select to decline an incoming transaction. The related task will change its result to failure both on senders and the receivers side. This endpoint can also be used to cancel an outgoing pending transaction that is awaiting user interaction from the receiver

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **taskActionRequest** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeDeleteWalletPost**
> AsyncTaskCreatedResponse NodeDeleteWalletPost(ctx, deleteWalletRequest)
Delete a Wallet [async call]

Deletes a Wallet from the Node; All private information about the Wallet will be deleted including transactional history, balances, and keys; If the secret key of the Wallet are not stored elsewhere then all Assets held in the Wallet will be forever lost! If the secret key of the Wallet is stored elsewhere, then all held Assets and the entire transactional history of the Wallet can be restored from the Blockchain at any time by importing the Wallet into a Node.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **deleteWalletRequest** | [**DeleteWalletRequest**](DeleteWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeExportAuditorAccessWalletPost**
> ExportAuditorAccessWalletResponse NodeExportAuditorAccessWalletPost(ctx, exportAuditorAccessWalletRequest)
Export viewing credentials for a Wallet

Export a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The viewing key is encrypted for a specific Address, and can only be recovered by someone in possession of either a secret key or a viewing key for the Wallet that Address belongs to. The viewing key does enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **exportAuditorAccessWalletRequest** | [**ExportAuditorAccessWalletRequest**](ExportAuditorAccessWalletRequest.md)|  | 

### Return type

[**ExportAuditorAccessWalletResponse**](ExportAuditorAccessWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeExportWalletPost**
> ExportWalletResponse NodeExportWalletPost(ctx, exportWalletRequest)
Export wallet secret key

Export an encrypted form of the Wallet's secret key; The authorization password under which the secret key is encrypted is the same one under which it was originally created or imported; Knowledge of the secret key and the authorization password is required to import the Wallet into a Node in the future.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **exportWalletRequest** | [**ExportWalletRequest**](ExportWalletRequest.md)|  | 

### Return type

[**ExportWalletResponse**](ExportWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGenerateWalletPost**
> NodeGenerateWalletPost(ctx, generateWalletRequest)
Generate a new Wallet

Randomly generate a new Wallet under a specified ID; This only affects the Node and in particular nothing about this action is broadcast to the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **generateWalletRequest** | [**GenerateWalletRequest**](GenerateWalletRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetAllWalletsPost**
> GetAllWalletsResponse NodeGetAllWalletsPost(ctx, )
Get all wallet IDs

Returns a list of the IDs of all Wallets currently stored on the Node. Both full-access and view-only Wallets are listed.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**GetAllWalletsResponse**](GetAllWalletsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetNotificationsPost**
> GetNotificationsResponse NodeGetNotificationsPost(ctx, getNotificationsRequest)
Get notifications

Notifications are the Node's way to report about recent activity and status changes. This endpoint allows polling for these changes and fetching the updates. The notifications can be filtered in multiple ways.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getNotificationsRequest** | [**GetNotificationsRequest**](GetNotificationsRequest.md)|  | 

### Return type

[**GetNotificationsResponse**](GetNotificationsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetRulesPost**
> GetRulesResponse NodeGetRulesPost(ctx, )
Get network governance Rules

Returns a full list of all the Rules that govern admin and issuance rights within the network.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**GetRulesResponse**](GetRulesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetTaskStatusPost**
> GetTaskStatusResponse NodeGetTaskStatusPost(ctx, getTaskStatusRequest)
Get a specific task (by ID)

Returns the meta-data of a given Task and its current status. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getTaskStatusRequest** | [**GetTaskStatusRequest**](GetTaskStatusRequest.md)|  | 

### Return type

[**GetTaskStatusResponse**](GetTaskStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetTasksPost**
> GetTasksResponse NodeGetTasksPost(ctx, getTasksRequest)
Get a (potentially) filtered list of all Tasks

Returns a list of all Tasks along with their meta-data and statuses. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned. Tasks can be filtered using various parameters as specified in the request body.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getTasksRequest** | [**GetTasksRequest**](GetTasksRequest.md)|  | 

### Return type

[**GetTasksResponse**](GetTasksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeImportAuditorAccessWalletPost**
> AsyncTaskCreatedResponse NodeImportAuditorAccessWalletPost(ctx, importAuditorAccessWalletRequest)
Import viewing credentials for a Wallet [async call]

Import a viewing key generated by the export_auditor_access_wallet endpoint. This will create a read-only wallet which can be queried with endpoints such as get_activity and get_balances, but cannot be used to perform transactions. The Wallet whose Address was used as the recipient for the exported viewing key must already be imported within the Node in order for this process to succeed.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **importAuditorAccessWalletRequest** | [**ImportAuditorAccessWalletRequest**](ImportAuditorAccessWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeImportWalletPost**
> AsyncTaskCreatedResponse NodeImportWalletPost(ctx, importWalletRequest)
Import Wallet from a known secret key and authorization [async call]

Import a Wallet into the Node under a specified ID; All the transactional history and outstanding balanced of the Wallet will be extracted from the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **importWalletRequest** | [**ImportWalletRequest**](ImportWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeUnlockWalletPost**
> AsyncTaskCreatedResponse NodeUnlockWalletPost(ctx, unlockWalletRequest)
Unlocks a wallet for a given amount of seconds [async call]

Causes a specified Wallet's secret key to be stored in-memory for a specified amount of time in order to increase transactional latency. Should only be used in cases where latency is highly sensitive.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **unlockWalletRequest** | [**UnlockWalletRequest**](UnlockWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

