# QedItAssetTransfers.AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsGetBlocksPost**](AnalyticsApi.md#analyticsGetBlocksPost) | **POST** /analytics/get_blocks | Get details on past blocks


<a name="analyticsGetBlocksPost"></a>
# **analyticsGetBlocksPost**
> GetBlocksResponse analyticsGetBlocksPost(getBlocksRequest)

Get details on past blocks

### Example
```javascript
var QedItAssetTransfers = require('qed-it-asset-transfers');
var defaultClient = QedItAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QedItAssetTransfers.AnalyticsApi();
var getBlocksRequest = new QedItAssetTransfers.GetBlocksRequest(); // GetBlocksRequest | 
apiInstance.analyticsGetBlocksPost(getBlocksRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
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

