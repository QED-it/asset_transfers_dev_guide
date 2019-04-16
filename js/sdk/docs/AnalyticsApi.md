# QedItAssetTransfers.AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsGetNetworkActivityPost**](AnalyticsApi.md#analyticsGetNetworkActivityPost) | **POST** /analytics/get_network_activity | Get details on past blocks


<a name="analyticsGetNetworkActivityPost"></a>
# **analyticsGetNetworkActivityPost**
> GetNetworkActivityResponse analyticsGetNetworkActivityPost(getNetworkActivityRequest)

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
var getNetworkActivityRequest = new QedItAssetTransfers.GetNetworkActivityRequest(); // GetNetworkActivityRequest | 
apiInstance.analyticsGetNetworkActivityPost(getNetworkActivityRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getNetworkActivityRequest** | [**GetNetworkActivityRequest**](GetNetworkActivityRequest.md)|  | 

### Return type

[**GetNetworkActivityResponse**](GetNetworkActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

