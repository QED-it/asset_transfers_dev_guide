# \WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WalletCreateRulePost**](WalletApi.md#WalletCreateRulePost) | **Post** /wallet/create_rule | Create &amp; broadcast add-config-rule [async call]
[**WalletDeleteRulePost**](WalletApi.md#WalletDeleteRulePost) | **Post** /wallet/delete_rule | Create &amp; broadcast delete-config-rule [async call]
[**WalletGetActivityPost**](WalletApi.md#WalletGetActivityPost) | **Post** /wallet/get_activity | Get wallet activity (transactions)
[**WalletGetBalancesPost**](WalletApi.md#WalletGetBalancesPost) | **Post** /wallet/get_balances | Get wallets balance
[**WalletGetNewAddressPost**](WalletApi.md#WalletGetNewAddressPost) | **Post** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**WalletGetPublicKeyPost**](WalletApi.md#WalletGetPublicKeyPost) | **Post** /wallet/get_public_key | Get wallet public key
[**WalletIssueAssetPost**](WalletApi.md#WalletIssueAssetPost) | **Post** /wallet/issue_asset | Issue assets [async call]
[**WalletTransferAssetPost**](WalletApi.md#WalletTransferAssetPost) | **Post** /wallet/transfer_asset | Transfer assets [async call]


# **WalletCreateRulePost**
> AsyncTaskCreatedResponse WalletCreateRulePost(ctx, createRuleRequest)
Create & broadcast add-config-rule [async call]

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **createRuleRequest** | [**CreateRuleRequest**](CreateRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletDeleteRulePost**
> AsyncTaskCreatedResponse WalletDeleteRulePost(ctx, deleteRuleRequest)
Create & broadcast delete-config-rule [async call]

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **deleteRuleRequest** | [**DeleteRuleRequest**](DeleteRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletGetActivityPost**
> GetActivityResponse WalletGetActivityPost(ctx, getActivityRequest)
Get wallet activity (transactions)

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getActivityRequest** | [**GetActivityRequest**](GetActivityRequest.md)|  | 

### Return type

[**GetActivityResponse**](GetActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletGetBalancesPost**
> GetWalletBalanceResponse WalletGetBalancesPost(ctx, getWalletBalanceRequest)
Get wallets balance

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getWalletBalanceRequest** | [**GetWalletBalanceRequest**](GetWalletBalanceRequest.md)|  | 

### Return type

[**GetWalletBalanceResponse**](GetWalletBalanceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletGetNewAddressPost**
> GetNewAddressResponse WalletGetNewAddressPost(ctx, getNewAddressRequest)
Get a new address from a given diversifier or generate randomly

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getNewAddressRequest** | [**GetNewAddressRequest**](GetNewAddressRequest.md)|  | 

### Return type

[**GetNewAddressResponse**](GetNewAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletGetPublicKeyPost**
> GetPublicKeyResponse WalletGetPublicKeyPost(ctx, getPublicKeyRequest)
Get wallet public key

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getPublicKeyRequest** | [**GetPublicKeyRequest**](GetPublicKeyRequest.md)|  | 

### Return type

[**GetPublicKeyResponse**](GetPublicKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletIssueAssetPost**
> AsyncTaskCreatedResponse WalletIssueAssetPost(ctx, issueAssetRequest)
Issue assets [async call]

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **issueAssetRequest** | [**IssueAssetRequest**](IssueAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletTransferAssetPost**
> AsyncTaskCreatedResponse WalletTransferAssetPost(ctx, transferAssetRequest)
Transfer assets [async call]

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transferAssetRequest** | [**TransferAssetRequest**](TransferAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

