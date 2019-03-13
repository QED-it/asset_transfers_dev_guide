# \AsyncApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NodeUnlockWalletPost**](AsyncApi.md#NodeUnlockWalletPost) | **Post** /node/unlock_wallet | Unlocks a wallet for a given amount of seconds [async call]


# **NodeUnlockWalletPost**
> AsyncTaskCreatedResponse NodeUnlockWalletPost(ctx, unlockWalletRequest)
Unlocks a wallet for a given amount of seconds [async call]

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **unlockWalletRequest** | [**UnlockWalletRequest**](UnlockWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

