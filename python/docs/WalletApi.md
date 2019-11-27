# pyqedit.WalletApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wallet_create_rule_post**](WalletApi.md#wallet_create_rule_post) | **POST** /wallet/create_rule | Create a new Rule in the network [async call]
[**wallet_delete_rule_post**](WalletApi.md#wallet_delete_rule_post) | **POST** /wallet/delete_rule | Delete an existing Rule from the network [async call]
[**wallet_get_activity_post**](WalletApi.md#wallet_get_activity_post) | **POST** /wallet/get_activity | Get wallet activity (transactions)
[**wallet_get_balances_post**](WalletApi.md#wallet_get_balances_post) | **POST** /wallet/get_balances | Get wallets balances
[**wallet_get_new_address_post**](WalletApi.md#wallet_get_new_address_post) | **POST** /wallet/get_new_address | Get a new address from a given diversifier or generate randomly
[**wallet_get_public_key_post**](WalletApi.md#wallet_get_public_key_post) | **POST** /wallet/get_public_key | Get wallet public key
[**wallet_issue_asset_post**](WalletApi.md#wallet_issue_asset_post) | **POST** /wallet/issue_asset | Issue assets [async call]
[**wallet_share_viewing_permission_post**](WalletApi.md#wallet_share_viewing_permission_post) | **POST** /wallet/share_viewing_permission | Share the viewing credentials for a given Wallet
[**wallet_transfer_asset_post**](WalletApi.md#wallet_transfer_asset_post) | **POST** /wallet/transfer_asset | Transfer assets [async call]


# **wallet_create_rule_post**
> AsyncTaskCreatedResponse wallet_create_rule_post(create_rule_request)

Create a new Rule in the network [async call]

Create new Rules that can either create a new admin, a new issuer, or both; The Rules are created by a Wallet that needs to have admin rights; The Rules grant rights to other Wallets through the Wallets' public keys.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
create_rule_request = pyqedit.CreateRuleRequest() # CreateRuleRequest | 

try:
    # Create a new Rule in the network [async call]
    api_response = api_instance.wallet_create_rule_post(create_rule_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_create_rule_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_rule_request** | [**CreateRuleRequest**](CreateRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_delete_rule_post**
> AsyncTaskCreatedResponse wallet_delete_rule_post(delete_rule_request)

Delete an existing Rule from the network [async call]

Delete an existing Rule from the network; The Rule is deleted by a Wallet which needs to have admin rights.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
delete_rule_request = pyqedit.DeleteRuleRequest() # DeleteRuleRequest | 

try:
    # Delete an existing Rule from the network [async call]
    api_response = api_instance.wallet_delete_rule_post(delete_rule_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_delete_rule_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_rule_request** | [**DeleteRuleRequest**](DeleteRuleRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_get_activity_post**
> GetWalletActivityResponse wallet_get_activity_post(get_wallet_activity_request)

Get wallet activity (transactions)

List transactions that were created by a specifed Wallet or that affected that Wallet; All known details of each such transaction will be returned.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
get_wallet_activity_request = pyqedit.GetWalletActivityRequest() # GetWalletActivityRequest | 

try:
    # Get wallet activity (transactions)
    api_response = api_instance.wallet_get_activity_post(get_wallet_activity_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_get_activity_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_wallet_activity_request** | [**GetWalletActivityRequest**](GetWalletActivityRequest.md)|  | 

### Return type

[**GetWalletActivityResponse**](GetWalletActivityResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_get_balances_post**
> GetWalletBalanceResponse wallet_get_balances_post(get_wallet_balance_request)

Get wallets balances

Get a list of the Asset Types held within a given Wallet and the amount of each type held.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
get_wallet_balance_request = pyqedit.GetWalletBalanceRequest() # GetWalletBalanceRequest | 

try:
    # Get wallets balances
    api_response = api_instance.wallet_get_balances_post(get_wallet_balance_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_get_balances_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_wallet_balance_request** | [**GetWalletBalanceRequest**](GetWalletBalanceRequest.md)|  | 

### Return type

[**GetWalletBalanceResponse**](GetWalletBalanceResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_get_new_address_post**
> GetNewAddressResponse wallet_get_new_address_post(get_new_address_request)

Get a new address from a given diversifier or generate randomly

Generate an Address for the Wallet; the address can be used by other Wallet owners to issue or transfer Assets into said Wallet; If a diversifier is provided, then the generated address is deterministically generated from the diversifier; If the diversifier is omitted, then a random diversifier is used and the resulting Address will be random; in both cases the Address cannot be linked to the Wallet by parties that do not have access to the Wallet. All generated Addresses of a Wallet are always valid and cannot be invalidated.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
get_new_address_request = pyqedit.GetNewAddressRequest() # GetNewAddressRequest | 

try:
    # Get a new address from a given diversifier or generate randomly
    api_response = api_instance.wallet_get_new_address_post(get_new_address_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_get_new_address_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_new_address_request** | [**GetNewAddressRequest**](GetNewAddressRequest.md)|  | 

### Return type

[**GetNewAddressResponse**](GetNewAddressResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_get_public_key_post**
> GetPublicKeyResponse wallet_get_public_key_post(get_public_key_request)

Get wallet public key

Get the unique public key of the Wallet; This key is unique across the entire network and is used to identify the Wallet.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
get_public_key_request = pyqedit.GetPublicKeyRequest() # GetPublicKeyRequest | 

try:
    # Get wallet public key
    api_response = api_instance.wallet_get_public_key_post(get_public_key_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_get_public_key_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_public_key_request** | [**GetPublicKeyRequest**](GetPublicKeyRequest.md)|  | 

### Return type

[**GetPublicKeyResponse**](GetPublicKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_issue_asset_post**
> AsyncTaskCreatedResponse wallet_issue_asset_post(issue_asset_request)

Issue assets [async call]

Issue Assets from a Wallet to a recipient Address; The issuing Wallet is required to have matching issuance rights (in the form of a matching Rule); Issuance can be done either confidentially or in public; In order to issue confidentially, the matching Rule must explicitly allow this.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
issue_asset_request = pyqedit.IssueAssetRequest() # IssueAssetRequest | 

try:
    # Issue assets [async call]
    api_response = api_instance.wallet_issue_asset_post(issue_asset_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_issue_asset_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_asset_request** | [**IssueAssetRequest**](IssueAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_share_viewing_permission_post**
> ShareWalletViewingPermissionResponse wallet_share_viewing_permission_post(share_wallet_viewing_permission_request)

Share the viewing credentials for a given Wallet

Share a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The key is shared via p2p messenger directly to the recipient, and is encrypted specifically for the intended recipient address. Upon arrival, the wallet is automatically added to the recipient's node. The viewing key does not enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
share_wallet_viewing_permission_request = pyqedit.ShareWalletViewingPermissionRequest() # ShareWalletViewingPermissionRequest | 

try:
    # Share the viewing credentials for a given Wallet
    api_response = api_instance.wallet_share_viewing_permission_post(share_wallet_viewing_permission_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_share_viewing_permission_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_wallet_viewing_permission_request** | [**ShareWalletViewingPermissionRequest**](ShareWalletViewingPermissionRequest.md)|  | 

### Return type

[**ShareWalletViewingPermissionResponse**](ShareWalletViewingPermissionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wallet_transfer_asset_post**
> AsyncTaskCreatedResponse wallet_transfer_asset_post(transfer_asset_request)

Transfer assets [async call]

Transfer a specified amount of a specified Asset Type from a specified Wallet to a specified Address; Transfers are always completely confidential.

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
api_instance = pyqedit.WalletApi(pyqedit.ApiClient(configuration))
transfer_asset_request = pyqedit.TransferAssetRequest() # TransferAssetRequest | 

try:
    # Transfer assets [async call]
    api_response = api_instance.wallet_transfer_asset_post(transfer_asset_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling WalletApi->wallet_transfer_asset_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transfer_asset_request** | [**TransferAssetRequest**](TransferAssetRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

