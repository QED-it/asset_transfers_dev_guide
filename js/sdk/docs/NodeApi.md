# QeditAssetTransfers.NodeApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeApproveTaskPost**](NodeApi.md#nodeApproveTaskPost) | **POST** /node/approve_task | Approve task with pending incoming transaction [async call]
[**nodeCancelTaskPost**](NodeApi.md#nodeCancelTaskPost) | **POST** /node/cancel_task | Cancel task with pending incoming transaction both incoming and outgoing [async call]
[**nodeDeleteWalletPost**](NodeApi.md#nodeDeleteWalletPost) | **POST** /node/delete_wallet | Delete a Wallet [async call]
[**nodeExportAuditorAccessWalletPost**](NodeApi.md#nodeExportAuditorAccessWalletPost) | **POST** /node/export_auditor_access_wallet | Export viewing credentials for a Wallet
[**nodeExportWalletPost**](NodeApi.md#nodeExportWalletPost) | **POST** /node/export_wallet | Export wallet secret key
[**nodeGenerateWalletPost**](NodeApi.md#nodeGenerateWalletPost) | **POST** /node/generate_wallet | Generate a new Wallet
[**nodeGetAllWalletsPost**](NodeApi.md#nodeGetAllWalletsPost) | **POST** /node/get_all_wallets | Get all wallet IDs
[**nodeGetNotificationsPost**](NodeApi.md#nodeGetNotificationsPost) | **POST** /node/get_notifications | Get notifications
[**nodeGetRulesPost**](NodeApi.md#nodeGetRulesPost) | **POST** /node/get_rules | Get network governance Rules
[**nodeGetTaskStatusPost**](NodeApi.md#nodeGetTaskStatusPost) | **POST** /node/get_task_status | Get a specific task (by ID)
[**nodeGetTasksPost**](NodeApi.md#nodeGetTasksPost) | **POST** /node/get_tasks | Get a (potentially) filtered list of all Tasks
[**nodeImportAuditorAccessWalletPost**](NodeApi.md#nodeImportAuditorAccessWalletPost) | **POST** /node/import_auditor_access_wallet | Import viewing credentials for a Wallet [async call]
[**nodeImportWalletPost**](NodeApi.md#nodeImportWalletPost) | **POST** /node/import_wallet | Import Wallet from a known secret key and authorization [async call]
[**nodeUnlockWalletPost**](NodeApi.md#nodeUnlockWalletPost) | **POST** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds [async call]


<a name="nodeApproveTaskPost"></a>
# **nodeApproveTaskPost**
> nodeApproveTaskPost(taskActionRequest)

Approve task with pending incoming transaction [async call]

Confirmation request tasks are confirmed using this point. After the user confirms the incoming transaction, it is asynchronously sent to the blockchain and its status can be queried like any other async task.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var taskActionRequest = new QeditAssetTransfers.TaskActionRequest(); // TaskActionRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.nodeApproveTaskPost(taskActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskActionRequest** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeCancelTaskPost"></a>
# **nodeCancelTaskPost**
> nodeCancelTaskPost(taskActionRequest)

Cancel task with pending incoming transaction both incoming and outgoing [async call]

A user may select to decline an incoming transaction. The related task will change its result to failure both on senders and the receivers side. This endpoint can also be used to cancel an outgoing pending transaction that is awaiting user interaction from the receiver

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var taskActionRequest = new QeditAssetTransfers.TaskActionRequest(); // TaskActionRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.nodeCancelTaskPost(taskActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskActionRequest** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeDeleteWalletPost"></a>
# **nodeDeleteWalletPost**
> AsyncTaskCreatedResponse nodeDeleteWalletPost(deleteWalletRequest)

Delete a Wallet [async call]

Deletes a Wallet from the Node; All private information about the Wallet will be deleted including transactional history, balances, and keys; If the secret key of the Wallet are not stored elsewhere then all Assets held in the Wallet will be forever lost! If the secret key of the Wallet is stored elsewhere, then all held Assets and the entire transactional history of the Wallet can be restored from the Blockchain at any time by importing the Wallet into a Node.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var deleteWalletRequest = new QeditAssetTransfers.DeleteWalletRequest(); // DeleteWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeDeleteWalletPost(deleteWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteWalletRequest** | [**DeleteWalletRequest**](DeleteWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeExportAuditorAccessWalletPost"></a>
# **nodeExportAuditorAccessWalletPost**
> ExportAuditorAccessWalletResponse nodeExportAuditorAccessWalletPost(exportAuditorAccessWalletRequest)

Export viewing credentials for a Wallet

Export a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The viewing key is encrypted for a specific Address, and can only be recovered by someone in possession of either a secret key or a viewing key for the Wallet that Address belongs to. The viewing key does enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var exportAuditorAccessWalletRequest = new QeditAssetTransfers.ExportAuditorAccessWalletRequest(); // ExportAuditorAccessWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeExportAuditorAccessWalletPost(exportAuditorAccessWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportAuditorAccessWalletRequest** | [**ExportAuditorAccessWalletRequest**](ExportAuditorAccessWalletRequest.md)|  | 

### Return type

[**ExportAuditorAccessWalletResponse**](ExportAuditorAccessWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeExportWalletPost"></a>
# **nodeExportWalletPost**
> ExportWalletResponse nodeExportWalletPost(exportWalletRequest)

Export wallet secret key

Export an encrypted form of the Wallet&#39;s secret key; The authorization password under which the secret key is encrypted is the same one under which it was originally created or imported; Knowledge of the secret key and the authorization password is required to import the Wallet into a Node in the future.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var exportWalletRequest = new QeditAssetTransfers.ExportWalletRequest(); // ExportWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeExportWalletPost(exportWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportWalletRequest** | [**ExportWalletRequest**](ExportWalletRequest.md)|  | 

### Return type

[**ExportWalletResponse**](ExportWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeGenerateWalletPost"></a>
# **nodeGenerateWalletPost**
> nodeGenerateWalletPost(generateWalletRequest)

Generate a new Wallet

Randomly generate a new Wallet under a specified ID; This only affects the Node and in particular nothing about this action is broadcast to the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var generateWalletRequest = new QeditAssetTransfers.GenerateWalletRequest(); // GenerateWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.nodeGenerateWalletPost(generateWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateWalletRequest** | [**GenerateWalletRequest**](GenerateWalletRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeGetAllWalletsPost"></a>
# **nodeGetAllWalletsPost**
> GetAllWalletsResponse nodeGetAllWalletsPost()

Get all wallet IDs

Returns a list of the IDs of all Wallets currently stored on the Node. Both full-access and view-only Wallets are listed.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeGetAllWalletsPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetAllWalletsResponse**](GetAllWalletsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nodeGetNotificationsPost"></a>
# **nodeGetNotificationsPost**
> GetNotificationsResponse nodeGetNotificationsPost(getNotificationsRequest)

Get notifications

Notifications are the Node&#39;s way to report about recent activity and status changes. This endpoint allows polling for these changes and fetching the updates. The notifications can be filtered in multiple ways.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var getNotificationsRequest = new QeditAssetTransfers.GetNotificationsRequest(); // GetNotificationsRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeGetNotificationsPost(getNotificationsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNotificationsRequest** | [**GetNotificationsRequest**](GetNotificationsRequest.md)|  | 

### Return type

[**GetNotificationsResponse**](GetNotificationsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeGetRulesPost"></a>
# **nodeGetRulesPost**
> GetRulesResponse nodeGetRulesPost()

Get network governance Rules

Returns a full list of all the Rules that govern admin and issuance rights within the network.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeGetRulesPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetRulesResponse**](GetRulesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nodeGetTaskStatusPost"></a>
# **nodeGetTaskStatusPost**
> GetTaskStatusResponse nodeGetTaskStatusPost(getTaskStatusRequest)

Get a specific task (by ID)

Returns the meta-data of a given Task and its current status. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var getTaskStatusRequest = new QeditAssetTransfers.GetTaskStatusRequest(); // GetTaskStatusRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeGetTaskStatusPost(getTaskStatusRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTaskStatusRequest** | [**GetTaskStatusRequest**](GetTaskStatusRequest.md)|  | 

### Return type

[**GetTaskStatusResponse**](GetTaskStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeGetTasksPost"></a>
# **nodeGetTasksPost**
> GetTasksResponse nodeGetTasksPost(getTasksRequest)

Get a (potentially) filtered list of all Tasks

Returns a list of all Tasks along with their meta-data and statuses. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned. Tasks can be filtered using various parameters as specified in the request body.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var getTasksRequest = new QeditAssetTransfers.GetTasksRequest(); // GetTasksRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeGetTasksPost(getTasksRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTasksRequest** | [**GetTasksRequest**](GetTasksRequest.md)|  | 

### Return type

[**GetTasksResponse**](GetTasksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeImportAuditorAccessWalletPost"></a>
# **nodeImportAuditorAccessWalletPost**
> AsyncTaskCreatedResponse nodeImportAuditorAccessWalletPost(importAuditorAccessWalletRequest)

Import viewing credentials for a Wallet [async call]

Import a viewing key generated by the export_auditor_access_wallet endpoint. This will create a read-only wallet which can be queried with endpoints such as get_activity and get_balances, but cannot be used to perform transactions. The Wallet whose Address was used as the recipient for the exported viewing key must already be imported within the Node in order for this process to succeed.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var importAuditorAccessWalletRequest = new QeditAssetTransfers.ImportAuditorAccessWalletRequest(); // ImportAuditorAccessWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeImportAuditorAccessWalletPost(importAuditorAccessWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importAuditorAccessWalletRequest** | [**ImportAuditorAccessWalletRequest**](ImportAuditorAccessWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeImportWalletPost"></a>
# **nodeImportWalletPost**
> AsyncTaskCreatedResponse nodeImportWalletPost(importWalletRequest)

Import Wallet from a known secret key and authorization [async call]

Import a Wallet into the Node under a specified ID; All the transactional history and outstanding balanced of the Wallet will be extracted from the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var importWalletRequest = new QeditAssetTransfers.ImportWalletRequest(); // ImportWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeImportWalletPost(importWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importWalletRequest** | [**ImportWalletRequest**](ImportWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nodeUnlockWalletPost"></a>
# **nodeUnlockWalletPost**
> AsyncTaskCreatedResponse nodeUnlockWalletPost(unlockWalletRequest)

Unlocks a wallet for a given amount of seconds [async call]

Causes a specified Wallet&#39;s secret key to be stored in-memory for a specified amount of time in order to increase transactional latency. Should only be used in cases where latency is highly sensitive.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.NodeApi();
var unlockWalletRequest = new QeditAssetTransfers.UnlockWalletRequest(); // UnlockWalletRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeUnlockWalletPost(unlockWalletRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlockWalletRequest** | [**UnlockWalletRequest**](UnlockWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

