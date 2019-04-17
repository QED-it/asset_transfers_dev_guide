# \AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalyticsGetNetworkActivityPost**](AnalyticsApi.md#AnalyticsGetNetworkActivityPost) | **Post** /analytics/get_network_activity | Get details on past blocks


# **AnalyticsGetNetworkActivityPost**
> GetNetworkActivityResponse AnalyticsGetNetworkActivityPost(ctx, getNetworkActivityRequest)
Get details on past blocks

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getNetworkActivityRequest** | [**GetNetworkActivityRequest**](GetNetworkActivityRequest.md)|  | 

### Return type

[**GetNetworkActivityResponse**](GetNetworkActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

