# \AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalyticsGetBlocksPost**](AnalyticsApi.md#AnalyticsGetBlocksPost) | **Post** /analytics/get_blocks | Get details on past blocks


# **AnalyticsGetBlocksPost**
> GetBlocksResponse AnalyticsGetBlocksPost(ctx, getBlocksRequest)
Get details on past blocks

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getBlocksRequest** | [**GetBlocksRequest**](GetBlocksRequest.md)|  | 

### Return type

[**GetBlocksResponse**](GetBlocksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

