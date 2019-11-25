# pyqedit.NodeApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**node_approve_task_post**](NodeApi.md#node_approve_task_post) | **POST** /node/approve_task | Approve task with pending incoming transaction [async call]
[**node_cancel_task_post**](NodeApi.md#node_cancel_task_post) | **POST** /node/cancel_task | Cancel task with pending incoming transaction both incoming and outgoing [async call]
[**node_delete_wallet_post**](NodeApi.md#node_delete_wallet_post) | **POST** /node/delete_wallet | Delete a Wallet [async call]
[**node_export_auditor_access_wallet_post**](NodeApi.md#node_export_auditor_access_wallet_post) | **POST** /node/export_auditor_access_wallet | Export viewing credentials for a Wallet
[**node_export_wallet_post**](NodeApi.md#node_export_wallet_post) | **POST** /node/export_wallet | Export wallet secret key
[**node_generate_wallet_post**](NodeApi.md#node_generate_wallet_post) | **POST** /node/generate_wallet | Generate a new Wallet
[**node_get_all_wallets_post**](NodeApi.md#node_get_all_wallets_post) | **POST** /node/get_all_wallets | Get all wallet IDs
[**node_get_notifications_post**](NodeApi.md#node_get_notifications_post) | **POST** /node/get_notifications | Get notifications
[**node_get_rules_post**](NodeApi.md#node_get_rules_post) | **POST** /node/get_rules | Get network governance Rules
[**node_get_task_status_post**](NodeApi.md#node_get_task_status_post) | **POST** /node/get_task_status | Get a specific task (by ID)
[**node_get_tasks_post**](NodeApi.md#node_get_tasks_post) | **POST** /node/get_tasks | Get a (potentially) filtered list of all Tasks
[**node_import_auditor_access_wallet_post**](NodeApi.md#node_import_auditor_access_wallet_post) | **POST** /node/import_auditor_access_wallet | Import viewing credentials for a Wallet [async call]
[**node_import_wallet_post**](NodeApi.md#node_import_wallet_post) | **POST** /node/import_wallet | Import Wallet from a known secret key and authorization [async call]


# **node_approve_task_post**
> node_approve_task_post(task_action_request)

Approve task with pending incoming transaction [async call]

Confirmation request tasks are confirmed using this point. After the user confirms the incoming transaction, it is asynchronously sent to the blockchain and its status can be queried like any other async task.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
task_action_request = pyqedit.TaskActionRequest() # TaskActionRequest | 

try:
    # Approve task with pending incoming transaction [async call]
    api_instance.node_approve_task_post(task_action_request)
except ApiException as e:
    print("Exception when calling NodeApi->node_approve_task_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_action_request** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_cancel_task_post**
> AsyncTaskCreatedResponse node_cancel_task_post(task_action_request)

Cancel task with pending incoming transaction both incoming and outgoing [async call]

A user may select to decline an incoming transaction. The related task will change its result to failure both on senders and the receivers side. This endpoint can also be used to cancel an outgoing pending transaction that is awaiting user interaction from the receiver

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
task_action_request = pyqedit.TaskActionRequest() # TaskActionRequest | 

try:
    # Cancel task with pending incoming transaction both incoming and outgoing [async call]
    api_response = api_instance.node_cancel_task_post(task_action_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_cancel_task_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_action_request** | [**TaskActionRequest**](TaskActionRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_delete_wallet_post**
> AsyncTaskCreatedResponse node_delete_wallet_post(delete_wallet_request)

Delete a Wallet [async call]

Deletes a Wallet from the Node; All private information about the Wallet will be deleted including transactional history, balances, and keys; If the secret key of the Wallet are not stored elsewhere then all Assets held in the Wallet will be forever lost! If the secret key of the Wallet is stored elsewhere, then all held Assets and the entire transactional history of the Wallet can be restored from the Blockchain at any time by importing the Wallet into a Node.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
delete_wallet_request = pyqedit.DeleteWalletRequest() # DeleteWalletRequest | 

try:
    # Delete a Wallet [async call]
    api_response = api_instance.node_delete_wallet_post(delete_wallet_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_delete_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_wallet_request** | [**DeleteWalletRequest**](DeleteWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_export_auditor_access_wallet_post**
> ExportAuditorAccessWalletResponse node_export_auditor_access_wallet_post(export_auditor_access_wallet_request)

Export viewing credentials for a Wallet

Export a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The viewing key is encrypted for a specific Address, and can only be recovered by someone in possession of either a secret key or a viewing key for the Wallet that Address belongs to. The viewing key does enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
export_auditor_access_wallet_request = pyqedit.ExportAuditorAccessWalletRequest() # ExportAuditorAccessWalletRequest | 

try:
    # Export viewing credentials for a Wallet
    api_response = api_instance.node_export_auditor_access_wallet_post(export_auditor_access_wallet_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_export_auditor_access_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_auditor_access_wallet_request** | [**ExportAuditorAccessWalletRequest**](ExportAuditorAccessWalletRequest.md)|  | 

### Return type

[**ExportAuditorAccessWalletResponse**](ExportAuditorAccessWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_export_wallet_post**
> ExportWalletResponse node_export_wallet_post(export_wallet_request)

Export wallet secret key

Export an encrypted form of the Wallet's secret key; The authorization password under which the secret key is encrypted is the same one under which it was originally created or imported; Knowledge of the secret key and the authorization password is required to import the Wallet into a Node in the future.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
export_wallet_request = pyqedit.ExportWalletRequest() # ExportWalletRequest | 

try:
    # Export wallet secret key
    api_response = api_instance.node_export_wallet_post(export_wallet_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_export_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_wallet_request** | [**ExportWalletRequest**](ExportWalletRequest.md)|  | 

### Return type

[**ExportWalletResponse**](ExportWalletResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_generate_wallet_post**
> node_generate_wallet_post(generate_wallet_request)

Generate a new Wallet

Randomly generate a new Wallet under a specified ID; This only affects the Node and in particular nothing about this action is broadcast to the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
generate_wallet_request = pyqedit.GenerateWalletRequest() # GenerateWalletRequest | 

try:
    # Generate a new Wallet
    api_instance.node_generate_wallet_post(generate_wallet_request)
except ApiException as e:
    print("Exception when calling NodeApi->node_generate_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_wallet_request** | [**GenerateWalletRequest**](GenerateWalletRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get_all_wallets_post**
> GetAllWalletsResponse node_get_all_wallets_post()

Get all wallet IDs

Returns a list of the IDs of all Wallets currently stored on the Node. Both full-access and view-only Wallets are listed.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))

try:
    # Get all wallet IDs
    api_response = api_instance.node_get_all_wallets_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_get_all_wallets_post: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetAllWalletsResponse**](GetAllWalletsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get_notifications_post**
> GetNotificationsResponse node_get_notifications_post(get_notifications_request)

Get notifications

Notifications are the Node's way to report about recent activity and status changes. This endpoint allows polling for these changes and fetching the updates. The notifications can be filtered in multiple ways.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
get_notifications_request = pyqedit.GetNotificationsRequest() # GetNotificationsRequest | 

try:
    # Get notifications
    api_response = api_instance.node_get_notifications_post(get_notifications_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_get_notifications_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_notifications_request** | [**GetNotificationsRequest**](GetNotificationsRequest.md)|  | 

### Return type

[**GetNotificationsResponse**](GetNotificationsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get_rules_post**
> GetRulesResponse node_get_rules_post()

Get network governance Rules

Returns a full list of all the Rules that govern admin and issuance rights within the network.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))

try:
    # Get network governance Rules
    api_response = api_instance.node_get_rules_post()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_get_rules_post: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetRulesResponse**](GetRulesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get_task_status_post**
> GetTaskStatusResponse node_get_task_status_post(get_task_status_request)

Get a specific task (by ID)

Returns the meta-data of a given Task and its current status. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
get_task_status_request = pyqedit.GetTaskStatusRequest() # GetTaskStatusRequest | 

try:
    # Get a specific task (by ID)
    api_response = api_instance.node_get_task_status_post(get_task_status_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_get_task_status_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_task_status_request** | [**GetTaskStatusRequest**](GetTaskStatusRequest.md)|  | 

### Return type

[**GetTaskStatusResponse**](GetTaskStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_get_tasks_post**
> GetTasksResponse node_get_tasks_post(get_tasks_request)

Get a (potentially) filtered list of all Tasks

Returns a list of all Tasks along with their meta-data and statuses. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned. Tasks can be filtered using various parameters as specified in the request body.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
get_tasks_request = pyqedit.GetTasksRequest() # GetTasksRequest | 

try:
    # Get a (potentially) filtered list of all Tasks
    api_response = api_instance.node_get_tasks_post(get_tasks_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_get_tasks_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_tasks_request** | [**GetTasksRequest**](GetTasksRequest.md)|  | 

### Return type

[**GetTasksResponse**](GetTasksResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_import_auditor_access_wallet_post**
> AsyncTaskCreatedResponse node_import_auditor_access_wallet_post(import_auditor_access_wallet_request)

Import viewing credentials for a Wallet [async call]

Import a viewing key generated by the export_auditor_access_wallet endpoint. This will create a read-only wallet which can be queried with endpoints such as get_activity and get_balances, but cannot be used to perform transactions. The Wallet whose Address was used as the recipient for the exported viewing key must already be imported within the Node in order for this process to succeed.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
import_auditor_access_wallet_request = pyqedit.ImportAuditorAccessWalletRequest() # ImportAuditorAccessWalletRequest | 

try:
    # Import viewing credentials for a Wallet [async call]
    api_response = api_instance.node_import_auditor_access_wallet_post(import_auditor_access_wallet_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_import_auditor_access_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_auditor_access_wallet_request** | [**ImportAuditorAccessWalletRequest**](ImportAuditorAccessWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_import_wallet_post**
> AsyncTaskCreatedResponse node_import_wallet_post(import_wallet_request)

Import Wallet from a known secret key and authorization [async call]

Import a Wallet into the Node under a specified ID; All the transactional history and outstanding balanced of the Wallet will be extracted from the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.

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
api_instance = pyqedit.NodeApi(pyqedit.ApiClient(configuration))
import_wallet_request = pyqedit.ImportWalletRequest() # ImportWalletRequest | 

try:
    # Import Wallet from a known secret key and authorization [async call]
    api_response = api_instance.node_import_wallet_post(import_wallet_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NodeApi->node_import_wallet_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_wallet_request** | [**ImportWalletRequest**](ImportWalletRequest.md)|  | 

### Return type

[**AsyncTaskCreatedResponse**](AsyncTaskCreatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

