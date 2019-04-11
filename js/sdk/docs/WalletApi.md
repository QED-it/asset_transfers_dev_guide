# QedItAssetTransfers.WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**walletCreateRulePost**](WalletApi.md#walletCreateRulePost) | **POST** /wallet/create_rule | Create &amp; broadcast add-config-rule [async call]
[**walletDeleteRulePost**](WalletApi.md#walletDeleteRulePost) | **POST** /wallet/delete_rule | Create &amp; broadcast delete-config-rule [async call]
[**walletGetNewAddressPost**](WalletApi.md#walletGetNewAddressPost) | **POST** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**walletGetPublicKeyPost**](WalletApi.md#walletGetPublicKeyPost) | **POST** /wallet/get_public_key | Get wallet public key
[**walletGetTransactionsPost**](WalletApi.md#walletGetTransactionsPost) | **POST** /wallet/get_transactions | Get details on past transactions
[**walletGetWalletBalancesPost**](WalletApi.md#walletGetWalletBalancesPost) | **POST** /wallet/get_wallet_balances | Get wallets information
[**walletIssueAssetPost**](WalletApi.md#walletIssueAssetPost) | **POST** /wallet/issue_asset | Issue assets [async call]
[**walletTransferAssetPost**](WalletApi.md#walletTransferAssetPost) | **POST** /wallet/transfer_asset | Transfer assets [async call]


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

var apiInstance = new QedItAssetTransfers.WalletApi();
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

var apiInstance = new QedItAssetTransfers.WalletApi();
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

<a name="walletGetNewAddressPost"></a>
# **walletGetNewAddressPost**
> GetNewAddressResponse walletGetNewAddressPost(getNewAddressRequest)

Get a new address from a given diversifier or generate randomly

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.WalletApi();
var getNewAddressRequest = new QedItAssetTransfers.GetNewAddressRequest(); // GetNewAddressRequest | 
apiInstance.walletGetNewAddressPost(getNewAddressRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNewAddressRequest** | [**GetNewAddressRequest**](GetNewAddressRequest.md)|  | 

### Return type

[**GetNewAddressResponse**](GetNewAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletGetPublicKeyPost"></a>
# **walletGetPublicKeyPost**
> GetPublicKeyResponse walletGetPublicKeyPost(getPublicKeyRequest)

Get wallet public key

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.WalletApi();
var getPublicKeyRequest = new QedItAssetTransfers.GetPublicKeyRequest(); // GetPublicKeyRequest | 
apiInstance.walletGetPublicKeyPost(getPublicKeyRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getPublicKeyRequest** | [**GetPublicKeyRequest**](GetPublicKeyRequest.md)|  | 

### Return type

[**GetPublicKeyResponse**](GetPublicKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletGetTransactionsPost"></a>
# **walletGetTransactionsPost**
> GetTransactionsResponse walletGetTransactionsPost(getTransactionsRequest)

Get details on past transactions

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.WalletApi();
var getTransactionsRequest = new QedItAssetTransfers.GetTransactionsRequest(); // GetTransactionsRequest | 
apiInstance.walletGetTransactionsPost(getTransactionsRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTransactionsRequest** | [**GetTransactionsRequest**](GetTransactionsRequest.md)|  | 

### Return type

[**GetTransactionsResponse**](GetTransactionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletGetWalletBalancesPost"></a>
# **walletGetWalletBalancesPost**
> GetWalletBalanceResponse walletGetWalletBalancesPost(getWalletBalanceRequest)

Get wallets information

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.WalletApi();
var getWalletBalanceRequest = new QedItAssetTransfers.GetWalletBalanceRequest(); // GetWalletBalanceRequest | 
apiInstance.walletGetWalletBalancesPost(getWalletBalanceRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getWalletBalanceRequest** | [**GetWalletBalanceRequest**](GetWalletBalanceRequest.md)|  | 

### Return type

[**GetWalletBalanceResponse**](GetWalletBalanceResponse.md)

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

var apiInstance = new QedItAssetTransfers.WalletApi();
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

var apiInstance = new QedItAssetTransfers.WalletApi();
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

