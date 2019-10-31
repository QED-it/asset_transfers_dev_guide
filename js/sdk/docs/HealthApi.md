# QeditAssetTransfers.HealthApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthPost**](HealthApi.md#healthPost) | **POST** /health | Perform a healthcheck of the node and its dependent services


<a name="healthPost"></a>
# **healthPost**
> HealthcheckResponse healthPost()

Perform a healthcheck of the node and its dependent services

Reports the health of the various components of the system as well as an overall status for the Node. If the Node&#39;s status is good, then the Node is synced with the Blockchain and can successfully process requests.

### Example
```javascript
var QeditAssetTransfers = require('qedit___asset_transfers');
var defaultClient = QeditAssetTransfers.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new QeditAssetTransfers.HealthApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.healthPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

