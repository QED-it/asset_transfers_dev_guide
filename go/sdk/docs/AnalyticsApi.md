# \AnalyticsApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalyticsGetNetworkActivityPost**](AnalyticsApi.md#AnalyticsGetNetworkActivityPost) | **Post** /analytics/get_network_activity | Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions
[**AnalyticsGetSyncStatusPost**](AnalyticsApi.md#AnalyticsGetSyncStatusPost) | **Post** /analytics/get_sync_status | Get blockchain sync status information


# **AnalyticsGetNetworkActivityPost**
> GetNetworkActivityResponse AnalyticsGetNetworkActivityPost(ctx, getNetworkActivityRequest)
Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions

List all verified Transactions from the network, even ones that do not have anything to do with any Wallet stored in the Node; For each such Transaction all of public information is returned in a structured format; However, no private information is returned even if some private information is known.

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

# **AnalyticsGetSyncStatusPost**
> GetSyncStatusResponse AnalyticsGetSyncStatusPost(ctx, )
Get blockchain sync status information

Returns detailed information about the status of the sync between the QEDIT Node and the underlying Blockchain

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**GetSyncStatusResponse**](GetSyncStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

