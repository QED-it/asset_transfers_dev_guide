# QeditAssetTransfers.AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsGetNetworkActivityPost**](AnalyticsApi.md#analyticsGetNetworkActivityPost) | **POST** /analytics/get_network_activity | Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions
[**analyticsGetSyncStatusPost**](AnalyticsApi.md#analyticsGetSyncStatusPost) | **POST** /analytics/get_sync_status | Get blockchain sync status information


<a name="analyticsGetNetworkActivityPost"></a>
# **analyticsGetNetworkActivityPost**
> GetNetworkActivityResponse analyticsGetNetworkActivityPost(getNetworkActivityRequest)

Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions

List all verified Transactions from the network, even ones that do not have anything to do with any Wallet stored in the Node; For each such Transaction all of public information is returned in a structured format; However, no private information is returned even if some private information is known.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.AnalyticsApi();
var getNetworkActivityRequest = new QeditAssetTransfers.GetNetworkActivityRequest(); // GetNetworkActivityRequest | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsGetNetworkActivityPost(getNetworkActivityRequest, callback);
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

<a name="analyticsGetSyncStatusPost"></a>
# **analyticsGetSyncStatusPost**
> GetSyncStatusResponse analyticsGetSyncStatusPost()

Get blockchain sync status information

Returns detailed information about the status of the sync between the QEDIT Node and the underlying Blockchain

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.AnalyticsApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.analyticsGetSyncStatusPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSyncStatusResponse**](GetSyncStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

