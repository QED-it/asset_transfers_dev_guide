# QedItAssetTransfers.WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**walletCreateRulePost**](WalletApi.md#walletCreateRulePost) | **POST** /wallet/create_rule | Create &amp; broadcast add-config-rule
[**walletDeleteRulePost**](WalletApi.md#walletDeleteRulePost) | **POST** /wallet/delete_rule | Create &amp; broadcast delete-config-rule
[**walletGetNewAddressPost**](WalletApi.md#walletGetNewAddressPost) | **POST** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**walletGetPublicKeyPost**](WalletApi.md#walletGetPublicKeyPost) | **POST** /wallet/get_public_key | Get wallet public key
[**walletGetWalletBalancesPost**](WalletApi.md#walletGetWalletBalancesPost) | **POST** /wallet/get_wallet_balances | Get wallets information
[**walletIssueAssetPost**](WalletApi.md#walletIssueAssetPost) | **POST** /wallet/issue_asset | Issue assets
[**walletTransferAssetPost**](WalletApi.md#walletTransferAssetPost) | **POST** /wallet/transfer_asset | Transfer assets


<a name="walletCreateRulePost"></a>
# **walletCreateRulePost**
> walletCreateRulePost(createRuleRequest)

Create &amp; broadcast add-config-rule

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let createRuleRequest = new QedItAssetTransfers.CreateRuleRequest(); // CreateRuleRequest | 
apiInstance.walletCreateRulePost(createRuleRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRuleRequest** | [**CreateRuleRequest**](CreateRuleRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="walletDeleteRulePost"></a>
# **walletDeleteRulePost**
> walletDeleteRulePost(deleteRuleRequest)

Create &amp; broadcast delete-config-rule

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let deleteRuleRequest = new QedItAssetTransfers.DeleteRuleRequest(); // DeleteRuleRequest | 
apiInstance.walletDeleteRulePost(deleteRuleRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteRuleRequest** | [**DeleteRuleRequest**](DeleteRuleRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="walletGetNewAddressPost"></a>
# **walletGetNewAddressPost**
> GetNewAddressResponse walletGetNewAddressPost(getNewAddressRequest)

Get a new address from a given diversifier or generate randomly

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let getNewAddressRequest = new QedItAssetTransfers.GetNewAddressRequest(); // GetNewAddressRequest | 
apiInstance.walletGetNewAddressPost(getNewAddressRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let getPublicKeyRequest = new QedItAssetTransfers.GetPublicKeyRequest(); // GetPublicKeyRequest | 
apiInstance.walletGetPublicKeyPost(getPublicKeyRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="walletGetWalletBalancesPost"></a>
# **walletGetWalletBalancesPost**
> GetWalletBalanceResponse walletGetWalletBalancesPost(getWalletBalanceRequest)

Get wallets information

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let getWalletBalanceRequest = new QedItAssetTransfers.GetWalletBalanceRequest(); // GetWalletBalanceRequest | 
apiInstance.walletGetWalletBalancesPost(getWalletBalanceRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
> walletIssueAssetPost(issueAssetRequest)

Issue assets

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let issueAssetRequest = new QedItAssetTransfers.IssueAssetRequest(); // IssueAssetRequest | 
apiInstance.walletIssueAssetPost(issueAssetRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issueAssetRequest** | [**IssueAssetRequest**](IssueAssetRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="walletTransferAssetPost"></a>
# **walletTransferAssetPost**
> walletTransferAssetPost(transferAssetRequest)

Transfer assets

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.WalletApi();
let transferAssetRequest = new QedItAssetTransfers.TransferAssetRequest(); // TransferAssetRequest | 
apiInstance.walletTransferAssetPost(transferAssetRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferAssetRequest** | [**TransferAssetRequest**](TransferAssetRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

