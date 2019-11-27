# \WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**WalletCreateRulePost**](WalletApi.md#WalletCreateRulePost) | **Post** /wallet/create_rule | Create a new Rule in the network [async call]
[**WalletDeleteRulePost**](WalletApi.md#WalletDeleteRulePost) | **Post** /wallet/delete_rule | Delete an existing Rule from the network [async call]
[**WalletGetActivityPost**](WalletApi.md#WalletGetActivityPost) | **Post** /wallet/get_activity | Get wallet activity (transactions)
[**WalletGetBalancesPost**](WalletApi.md#WalletGetBalancesPost) | **Post** /wallet/get_balances | Get wallets balances
[**WalletGetNewAddressPost**](WalletApi.md#WalletGetNewAddressPost) | **Post** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**WalletGetPublicKeyPost**](WalletApi.md#WalletGetPublicKeyPost) | **Post** /wallet/get_public_key | Get wallet public key
[**WalletIssueAssetPost**](WalletApi.md#WalletIssueAssetPost) | **Post** /wallet/issue_asset | Issue assets [async call]
[**WalletShareViewingPermissionPost**](WalletApi.md#WalletShareViewingPermissionPost) | **Post** /wallet/share_viewing_permission | Share the viewing credentials for a given Wallet
[**WalletTransferAssetPost**](WalletApi.md#WalletTransferAssetPost) | **Post** /wallet/transfer_asset | Transfer assets [async call]


# **WalletCreateRulePost**
> AsyncTaskCreatedResponse WalletCreateRulePost(ctx, createRuleRequest)
Create a new Rule in the network [async call]

Create new Rules that can either create a new admin, a new issuer, or both; The Rules are created by a Wallet that needs to have admin rights; The Rules grant rights to other Wallets through the Wallets' public keys.

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
Delete an existing Rule from the network [async call]

Delete an existing Rule from the network; The Rule is deleted by a Wallet which needs to have admin rights.

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
> GetWalletActivityResponse WalletGetActivityPost(ctx, getWalletActivityRequest)
Get wallet activity (transactions)

List transactions that were created by a specifed Wallet or that affected that Wallet; All known details of each such transaction will be returned.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getWalletActivityRequest** | [**GetWalletActivityRequest**](GetWalletActivityRequest.md)|  | 

### Return type

[**GetWalletActivityResponse**](GetWalletActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletGetBalancesPost**
> GetWalletBalanceResponse WalletGetBalancesPost(ctx, getWalletBalanceRequest)
Get wallets balances

Get a list of the Asset Types held within a given Wallet and the amount of each type held.

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

Generate an Address for the Wallet; the address can be used by other Wallet owners to issue or transfer Assets into said Wallet; If a diversifier is provided, then the generated address is deterministically generated from the diversifier; If the diversifier is omitted, then a random diversifier is used and the resulting Address will be random; in both cases the Address cannot be linked to the Wallet by parties that do not have access to the Wallet. All generated Addresses of a Wallet are always valid and cannot be invalidated.

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

Get the unique public key of the Wallet; This key is unique across the entire network and is used to identify the Wallet.

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

Issue Assets from a Wallet to a recipient Address; The issuing Wallet is required to have matching issuance rights (in the form of a matching Rule); Issuance can be done either confidentially or in public; In order to issue confidentially, the matching Rule must explicitly allow this.

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

# **WalletShareViewingPermissionPost**
> ShareWalletViewingPermissionResponse WalletShareViewingPermissionPost(ctx, shareWalletViewingPermissionRequest)
Share the viewing credentials for a given Wallet

Share a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The key is shared via p2p messenger directly to the recipient, and is encrypted specifically for the intended recipient address. Upon arrival, the wallet is automatically added to the recipient's node. The viewing key does not enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **shareWalletViewingPermissionRequest** | [**ShareWalletViewingPermissionRequest**](ShareWalletViewingPermissionRequest.md)|  | 

### Return type

[**ShareWalletViewingPermissionResponse**](ShareWalletViewingPermissionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **WalletTransferAssetPost**
> AsyncTaskCreatedResponse WalletTransferAssetPost(ctx, transferAssetRequest)
Transfer assets [async call]

Transfer a specified amount of a specified Asset Type from a specified Wallet to a specified Address; Transfers are always completely confidential.

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

