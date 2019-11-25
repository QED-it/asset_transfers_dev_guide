# pyqedit.HealthApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_post**](HealthApi.md#health_post) | **POST** /health | Perform a healthcheck of the node and its dependent services


# **health_post**
> HealthcheckResponse health_post()

Perform a healthcheck of the node and its dependent services

Reports the health of the various components of the system as well as an overall status for the Node. If the Node's status is good, then the Node is synced with the Blockchain and can successfully process requests.

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
api_instance = pyqedit.HealthApi(pyqedit.ApiClient(configuration))

try:
    # Perform a healthcheck of the node and its dependent services
    api_response = api_instance.health_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HealthApi->health_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

