# QedItAssetTransfers.AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsGetBlocksPost**](AnalyticsApi.md#analyticsGetBlocksPost) | **POST** /analytics/get_blocks | Get details on past blocks
[**analyticsGetTransactionsPost**](AnalyticsApi.md#analyticsGetTransactionsPost) | **POST** /analytics/get_transactions | Get details on past transactions


<a name="analyticsGetBlocksPost"></a>
# **analyticsGetBlocksPost**
> GetBlocksResponse analyticsGetBlocksPost(getBlocksRequest)

Get details on past blocks

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.AnalyticsApi();
let getBlocksRequest = new QedItAssetTransfers.GetBlocksRequest(); // GetBlocksRequest | 
apiInstance.analyticsGetBlocksPost(getBlocksRequest, (error, data, response) => {
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
 **getBlocksRequest** | [**GetBlocksRequest**](GetBlocksRequest.md)|  | 

### Return type

[**GetBlocksResponse**](GetBlocksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="analyticsGetTransactionsPost"></a>
# **analyticsGetTransactionsPost**
> GetTransactionsResponse analyticsGetTransactionsPost(getTransactionsRequest)

Get details on past transactions

### Example
```javascript
import QedItAssetTransfers from 'QED-it-asset-transfers';
let defaultClient = QedItAssetTransfers.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new QedItAssetTransfers.AnalyticsApi();
let getTransactionsRequest = new QedItAssetTransfers.GetTransactionsRequest(); // GetTransactionsRequest | 
apiInstance.analyticsGetTransactionsPost(getTransactionsRequest, (error, data, response) => {
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
 **getTransactionsRequest** | [**GetTransactionsRequest**](GetTransactionsRequest.md)|  | 

### Return type

[**GetTransactionsResponse**](GetTransactionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

