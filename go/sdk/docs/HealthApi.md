# \HealthApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**HealthPost**](HealthApi.md#HealthPost) | **Post** /health | Perform a healthcheck of the node and its dependent services


# **HealthPost**
> HealthcheckResponse HealthPost(ctx, )
Perform a healthcheck of the node and its dependent services

Reports the health of the various components of the system as well as an overall status for the Node. If the Node's status is good, then the Node is synced with the Blockchain and can successfully process requests.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

