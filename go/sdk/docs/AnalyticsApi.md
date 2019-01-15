# \AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalyticsGetBlocksPost**](AnalyticsApi.md#AnalyticsGetBlocksPost) | **Post** /analytics/get_blocks | Get details on past blocks
[**AnalyticsGetTransactionsPost**](AnalyticsApi.md#AnalyticsGetTransactionsPost) | **Post** /analytics/get_transactions | Get details on past transactions


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

# **AnalyticsGetTransactionsPost**
> GetTransactionsResponse AnalyticsGetTransactionsPost(ctx, getTransactionsRequest)
Get details on past transactions

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getTransactionsRequest** | [**GetTransactionsRequest**](GetTransactionsRequest.md)|  | 

### Return type

[**GetTransactionsResponse**](GetTransactionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

