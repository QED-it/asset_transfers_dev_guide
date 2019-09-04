# QedItAssetTransfers.WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**walletCreateRulePost**](WalletApi.md#walletCreateRulePost) | **POST** /wallet/create_rule | Create a new Rule in the network [async call]
[**walletDeleteRulePost**](WalletApi.md#walletDeleteRulePost) | **POST** /wallet/delete_rule | Delete an existing Rule from the network [async call]
[**walletGetActivityPost**](WalletApi.md#walletGetActivityPost) | **POST** /wallet/get_activity | Get wallet activity (transactions)
[**walletGetBalancesPost**](WalletApi.md#walletGetBalancesPost) | **POST** /wallet/get_balances | Get wallets balances
[**walletGetNewAddressPost**](WalletApi.md#walletGetNewAddressPost) | **POST** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**walletGetPublicKeyPost**](WalletApi.md#walletGetPublicKeyPost) | **POST** /wallet/get_public_key | Get wallet public key
[**walletIssueAssetPost**](WalletApi.md#walletIssueAssetPost) | **POST** /wallet/issue_asset | Issue assets [async call]
[**walletTransferAssetPost**](WalletApi.md#walletTransferAssetPost) | **POST** /wallet/transfer_asset | Transfer assets [async call]


<a name="walletCreateRulePost"></a>
# **walletCreateRulePost**
> AsyncTaskCreatedResponse walletCreateRulePost(createRuleRequest)

Create a new Rule in the network [async call]

Create new Rules that can either create a new admin, a new issuer, or both; The Rules are created by a Wallet that needs to have admin rights; The Rules grant rights to other Wallets through the Wallets&#39; public keys.

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

Delete an existing Rule from the network [async call]

Delete an existing Rule from the network; The Rule is deleted by a Wallet which needs to have admin rights.

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

<a name="walletGetActivityPost"></a>
# **walletGetActivityPost**
> GetWalletActivityResponse walletGetActivityPost(getWalletActivityRequest)

Get wallet activity (transactions)

List transactions that were created by a specifed Wallet or that affected that Wallet; All known details of each such transaction will be returned.

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
var getWalletActivityRequest = new QedItAssetTransfers.GetWalletActivityRequest(); // GetWalletActivityRequest | 
apiInstance.walletGetActivityPost(getWalletActivityRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getWalletActivityRequest** | [**GetWalletActivityRequest**](GetWalletActivityRequest.md)|  | 

### Return type

[**GetWalletActivityResponse**](GetWalletActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="walletGetBalancesPost"></a>
# **walletGetBalancesPost**
> GetWalletBalanceResponse walletGetBalancesPost(getWalletBalanceRequest)

Get wallets balances

Get a list of the Asset Types held within a given Wallet and the amount of each type held.

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
apiInstance.walletGetBalancesPost(getWalletBalanceRequest).then(function(data) {
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

<a name="walletGetNewAddressPost"></a>
# **walletGetNewAddressPost**
> GetNewAddressResponse walletGetNewAddressPost(getNewAddressRequest)

Get a new address from a given diversifier or generate randomly

Generate an Address for the Wallet; the address can be used by other Wallet owners to issue or transfer Assets into said Wallet; If a diversifier is provided, then the generated address is deterministically generated from the diversifier; If the diversifier is omitted, then a random diversifier is used and the resulting Address will be random; in both cases the Address cannot be linked to the Wallet by parties that do not have access to the Wallet. All generated Addresses of a Wallet are always valid and cannot be invalidated.

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

Get the unique public key of the Wallet; This key is unique across the entire network and is used to identify the Wallet.

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

<a name="walletIssueAssetPost"></a>
# **walletIssueAssetPost**
> AsyncTaskCreatedResponse walletIssueAssetPost(issueAssetRequest)

Issue assets [async call]

Issue Assets from a Wallet to a recipient Address; The issuing Wallet is required to have matching issuance rights (in the form of a matching Rule); Issuance can be done either confidentially or in public; In order to issue confidentially, the matching Rule must explicitly allow this.

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

Transfer a specified amount of a specified Asset Type from a specified Wallet to a specified Address; Transfers are always completely confidential.

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

