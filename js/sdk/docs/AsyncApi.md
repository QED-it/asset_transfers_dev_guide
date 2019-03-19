# QedItAssetTransfers.AsyncApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeUnlockWalletPost**](AsyncApi.md#nodeUnlockWalletPost) | **POST** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds [async call]
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

