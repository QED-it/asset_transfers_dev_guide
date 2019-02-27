# \NodeApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NodeDeleteWalletPost**](NodeApi.md#NodeDeleteWalletPost) | **Post** /node/delete_wallet | Delete a wallet
[**NodeExportWalletPost**](NodeApi.md#NodeExportWalletPost) | **Post** /node/export_wallet | Export wallet secret key
[**NodeGenerateWalletPost**](NodeApi.md#NodeGenerateWalletPost) | **Post** /node/generate_wallet | Generate a new wallet
[**NodeGetAllWalletsPost**](NodeApi.md#NodeGetAllWalletsPost) | **Post** /node/get_all_wallets | Get all wallet labels
[**NodeGetRulesPost**](NodeApi.md#NodeGetRulesPost) | **Post** /node/get_rules | Get network governance rules
[**NodeImportWalletPost**](NodeApi.md#NodeImportWalletPost) | **Post** /node/import_wallet | Import wallet from secret key
[**NodeUnlockWalletPost**](NodeApi.md#NodeUnlockWalletPost) | **Post** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds


# **NodeDeleteWalletPost**
> NodeDeleteWalletPost(ctx, deleteWalletRequest)
Delete a wallet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **deleteWalletRequest** | [**DeleteWalletRequest**](DeleteWalletRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeExportWalletPost**
> ExportWalletResponse NodeExportWalletPost(ctx, exportWalletRequest)
Export wallet secret key

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **exportWalletRequest** | [**ExportWalletRequest**](ExportWalletRequest.md)|  | 

### Return type

[**ExportWalletResponse**](ExportWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGenerateWalletPost**
> NodeGenerateWalletPost(ctx, generateWalletRequest)
Generate a new wallet

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **generateWalletRequest** | [**GenerateWalletRequest**](GenerateWalletRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetAllWalletsPost**
> GetAllWalletsResponse NodeGetAllWalletsPost(ctx, )
Get all wallet labels

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**GetAllWalletsResponse**](GetAllWalletsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeGetRulesPost**
> GetRulesResponse NodeGetRulesPost(ctx, )
Get network governance rules

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**GetRulesResponse**](GetRulesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeImportWalletPost**
> NodeImportWalletPost(ctx, importWalletRequest)
Import wallet from secret key

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **importWalletRequest** | [**ImportWalletRequest**](ImportWalletRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NodeUnlockWalletPost**
> NodeUnlockWalletPost(ctx, unlockWalletRequest)
Unlocks a wallet for a given amount of seconds

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **unlockWalletRequest** | [**UnlockWalletRequest**](UnlockWalletRequest.md)|  | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

