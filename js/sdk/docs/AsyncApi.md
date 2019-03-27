# QedItAssetTransfers.AsyncApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeUnlockWalletPost**](AsyncApi.md#nodeUnlockWalletPost) | **POST** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds [async call]
[**walletCreateRulePost**](AsyncApi.md#walletCreateRulePost) | **POST** /wallet/create_rule | Create &amp; broadcast add-config-rule [async call]
[**walletDeleteRulePost**](AsyncApi.md#walletDeleteRulePost) | **POST** /wallet/delete_rule | Create &amp; broadcast delete-config-rule [async call]
[**walletIssueAssetPost**](AsyncApi.md#walletIssueAssetPost) | **POST** /wallet/issue_asset | Issue assets [async call]
[**walletTransferAssetPost**](AsyncApi.md#walletTransferAssetPost) | **POST** /wallet/transfer_asset | Transfer assets [async call]


<a name="nodeUnlockWalletPost"></a>
# **nodeUnlockWalletPost**
> AsyncTaskCreatedResponse nodeUnlockWalletPost(unlockWalletRequest)

Unlocks a wallet for a given amount of seconds [async call]

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AsyncApi();
var unlockWalletRequest = new QedItAssetTransfers.UnlockWalletRequest(); // UnlockWalletRequest | 
apiInstance.nodeUnlockWalletPost(unlockWalletRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="walletCreateRulePost"></a>
# **walletCreateRulePost**
> AsyncTaskCreatedResponse walletCreateRulePost(createRuleRequest)

Create &amp; broadcast add-config-rule [async call]

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AsyncApi();
var createRuleRequest = new QedItAssetTransfers.CreateRuleRequest(); // CreateRuleRequest | 
apiInstance.walletCreateRulePost(createRuleRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRuleRequest** | [**CreateRuleRequest**](CreateRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletDeleteRulePost"></a>
# **walletDeleteRulePost**
> AsyncTaskCreatedResponse walletDeleteRulePost(deleteRuleRequest)

Create &amp; broadcast delete-config-rule [async call]

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AsyncApi();
var deleteRuleRequest = new QedItAssetTransfers.DeleteRuleRequest(); // DeleteRuleRequest | 
apiInstance.walletDeleteRulePost(deleteRuleRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteRuleRequest** | [**DeleteRuleRequest**](DeleteRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletIssueAssetPost"></a>
# **walletIssueAssetPost**
> AsyncTaskCreatedResponse walletIssueAssetPost(issueAssetRequest)

Issue assets [async call]

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AsyncApi();
var issueAssetRequest = new QedItAssetTransfers.IssueAssetRequest(); // IssueAssetRequest | 
apiInstance.walletIssueAssetPost(issueAssetRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueAssetRequest** | [**IssueAssetRequest**](IssueAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletTransferAssetPost"></a>
# **walletTransferAssetPost**
> AsyncTaskCreatedResponse walletTransferAssetPost(transferAssetRequest)

Transfer assets [async call]

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AsyncApi();
var transferAssetRequest = new QedItAssetTransfers.TransferAssetRequest(); // TransferAssetRequest | 
apiInstance.walletTransferAssetPost(transferAssetRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferAssetRequest** | [**TransferAssetRequest**](TransferAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

