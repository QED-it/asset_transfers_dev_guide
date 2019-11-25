# pyqedit.AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_get_network_activity_post**](AnalyticsApi.md#analytics_get_network_activity_post) | **POST** /analytics/get_network_activity | Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions
[**analytics_get_sync_status_post**](AnalyticsApi.md#analytics_get_sync_status_post) | **POST** /analytics/get_sync_status | Get blockchain sync status information


# **analytics_get_network_activity_post**
> GetNetworkActivityResponse analytics_get_network_activity_post(get_network_activity_request)

Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions

List all verified Transactions from the network, even ones that do not have anything to do with any Wallet stored in the Node; For each such Transaction all of public information is returned in a structured format; However, no private information is returned even if some private information is known.

### Example

* Api Key Authentication (ApiKeyAuth): 
```python
from __future__ import print_function
import time
import pyqedit
from pyqedit.rest import ApiException
from pprint import pprint

# Configure API key authorization: ApiKeyAuth
configuration = pyqedit.Configuration()
configuration.api_key['x-auth-token'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-auth-token'] = 'Bearer'

# create an instance of the API class
api_instance = pyqedit.AnalyticsApi(pyqedit.ApiClient(configuration))
get_network_activity_request = pyqedit.GetNetworkActivityRequest() # GetNetworkActivityRequest | 

try:
    # Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions
    api_response = api_instance.analytics_get_network_activity_post(get_network_activity_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnalyticsApi->analytics_get_network_activity_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_network_activity_request** | [**GetNetworkActivityRequest**](GetNetworkActivityRequest.md)|  | 

### Return type

[**GetNetworkActivityResponse**](GetNetworkActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_get_sync_status_post**
> GetSyncStatusResponse analytics_get_sync_status_post()

Get blockchain sync status information

Returns detailed information about the status of the sync between the QEDIT Node and the underlying Blockchain

### Example

* Api Key Authentication (ApiKeyAuth): 
```python
from __future__ import print_function
import time
import pyqedit
from pyqedit.rest import ApiException
from pprint import pprint

# Configure API key authorization: ApiKeyAuth
configuration = pyqedit.Configuration()
configuration.api_key['x-auth-token'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['x-auth-token'] = 'Bearer'

# create an instance of the API class
api_instance = pyqedit.AnalyticsApi(pyqedit.ApiClient(configuration))

try:
    # Get blockchain sync status information
    api_response = api_instance.analytics_get_sync_status_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnalyticsApi->analytics_get_sync_status_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

