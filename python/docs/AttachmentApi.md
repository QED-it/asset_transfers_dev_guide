# pyqedit.AttachmentApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachment_add_to_group_post**](AttachmentApi.md#attachment_add_to_group_post) | **POST** /attachment/add_to_group | Add a new member to a group
[**attachment_create_group_post**](AttachmentApi.md#attachment_create_group_post) | **POST** /attachment/create_group | Create a new group
[**attachment_download_post**](AttachmentApi.md#attachment_download_post) | **POST** /attachment/download | Download an Attachment
[**attachment_get_groups_post**](AttachmentApi.md#attachment_get_groups_post) | **POST** /attachment/get_groups | List the Groups the Wallet has access to
[**attachment_leave_group_post**](AttachmentApi.md#attachment_leave_group_post) | **POST** /attachment/leave_group | Removes an owned Wallet from a Group
[**attachment_list_post**](AttachmentApi.md#attachment_list_post) | **POST** /attachment/list | Lists available Attachments
[**attachment_upload_post**](AttachmentApi.md#attachment_upload_post) | **POST** /attachment/upload | Upload an Attachment and share it with a Group


# **attachment_add_to_group_post**
> AddToGroupResponse attachment_add_to_group_post(add_to_group_request)

Add a new member to a group

Shares with another Wallet the credentials required to either write or both read and write to a Group another Wallet. The Group will be automatically added to any Nodes that have the recipient Wallet stored within them, including Nodes that have viewing-only access to said Wallet.

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
add_to_group_request = pyqedit.AddToGroupRequest() # AddToGroupRequest | 

try:
    # Add a new member to a group
    api_response = api_instance.attachment_add_to_group_post(add_to_group_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_add_to_group_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_to_group_request** | [**AddToGroupRequest**](AddToGroupRequest.md)|  | 

### Return type

[**AddToGroupResponse**](AddToGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_create_group_post**
> CreateGroupResponse attachment_create_group_post(create_group_request)

Create a new group

Groups are cryptographically-secure permission-sets which allow their members to either write or read/write to the Group (there's no read-only permission). When creating a new Group, a new secret is created which can be used to encrypt Attachments. Attachments can be stored (in encrypted form) in Groups, and Group permissions can be shared with other Wallets.

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
create_group_request = pyqedit.CreateGroupRequest() # CreateGroupRequest | 

try:
    # Create a new group
    api_response = api_instance.attachment_create_group_post(create_group_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_create_group_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_group_request** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | 

### Return type

[**CreateGroupResponse**](CreateGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_download_post**
> AttachmentBody attachment_download_post(download_attachment_request)

Download an Attachment

Downloads and decrypts an Attachment given an Attachment ID, and assuming it exists and a Wallet with proper credentials for the relevant Group is used

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
download_attachment_request = pyqedit.DownloadAttachmentRequest() # DownloadAttachmentRequest | 

try:
    # Download an Attachment
    api_response = api_instance.attachment_download_post(download_attachment_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_download_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **download_attachment_request** | [**DownloadAttachmentRequest**](DownloadAttachmentRequest.md)|  | 

### Return type

[**AttachmentBody**](AttachmentBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_get_groups_post**
> GetGroupsResponse attachment_get_groups_post(get_groups_request)

List the Groups the Wallet has access to

Returns the full list of Groups the Wallet has credentials for (both write-only and read/write).

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
get_groups_request = pyqedit.GetGroupsRequest() # GetGroupsRequest | 

try:
    # List the Groups the Wallet has access to
    api_response = api_instance.attachment_get_groups_post(get_groups_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_get_groups_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_groups_request** | [**GetGroupsRequest**](GetGroupsRequest.md)|  | 

### Return type

[**GetGroupsResponse**](GetGroupsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_leave_group_post**
> LeaveGroupResponse attachment_leave_group_post(leave_group_request)

Removes an owned Wallet from a Group

Deletes any credentials and messages that relate to the given Group and are owned by the given Wallet. Does not affect other Wallets in the same Node. Only owners of Wallets can remove their own Wallets from any given Group.

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
leave_group_request = pyqedit.LeaveGroupRequest() # LeaveGroupRequest | 

try:
    # Removes an owned Wallet from a Group
    api_response = api_instance.attachment_leave_group_post(leave_group_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_leave_group_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leave_group_request** | [**LeaveGroupRequest**](LeaveGroupRequest.md)|  | 

### Return type

[**LeaveGroupResponse**](LeaveGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_list_post**
> ListAttachmentsResponse attachment_list_post(list_attachments_request)

Lists available Attachments

Lists the Attachments available for download for a given Wallet, and filtered by further arguments. Note that Attachments must be filtered by exactly one of th e optional filters (transaction hashes or asset IDs).

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
list_attachments_request = pyqedit.ListAttachmentsRequest() # ListAttachmentsRequest | 

try:
    # Lists available Attachments
    api_response = api_instance.attachment_list_post(list_attachments_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_list_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_attachments_request** | [**ListAttachmentsRequest**](ListAttachmentsRequest.md)|  | 

### Return type

[**ListAttachmentsResponse**](ListAttachmentsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attachment_upload_post**
> UploadAttachmentResponse attachment_upload_post(upload_attachment_request)

Upload an Attachment and share it with a Group

Encrypts and uploads an Attachment so that it becomes shared with a given Group. Returns a globally-unique identifier for the Attachment to be used in subsequent API calls.

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
api_instance = pyqedit.AttachmentApi(pyqedit.ApiClient(configuration))
upload_attachment_request = pyqedit.UploadAttachmentRequest() # UploadAttachmentRequest | 

try:
    # Upload an Attachment and share it with a Group
    api_response = api_instance.attachment_upload_post(upload_attachment_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttachmentApi->attachment_upload_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_attachment_request** | [**UploadAttachmentRequest**](UploadAttachmentRequest.md)|  | 

### Return type

[**UploadAttachmentResponse**](UploadAttachmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

