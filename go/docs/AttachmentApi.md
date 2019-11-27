# \AttachmentApi

All URIs are relative to *http://localhost:12052*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AttachmentAddToGroupPost**](AttachmentApi.md#AttachmentAddToGroupPost) | **Post** /attachment/add_to_group | Add a new member to a group
[**AttachmentCreateGroupPost**](AttachmentApi.md#AttachmentCreateGroupPost) | **Post** /attachment/create_group | Create a new group
[**AttachmentDownloadPost**](AttachmentApi.md#AttachmentDownloadPost) | **Post** /attachment/download | Download an Attachment
[**AttachmentGetGroupsPost**](AttachmentApi.md#AttachmentGetGroupsPost) | **Post** /attachment/get_groups | List the Groups the Wallet has access to
[**AttachmentLeaveGroupPost**](AttachmentApi.md#AttachmentLeaveGroupPost) | **Post** /attachment/leave_group | Removes an owned Wallet from a Group
[**AttachmentListPost**](AttachmentApi.md#AttachmentListPost) | **Post** /attachment/list | Lists available Attachments
[**AttachmentUploadPost**](AttachmentApi.md#AttachmentUploadPost) | **Post** /attachment/upload | Upload an Attachment and share it with a Group


# **AttachmentAddToGroupPost**
> AddToGroupResponse AttachmentAddToGroupPost(ctx, addToGroupRequest)
Add a new member to a group

Shares with another Wallet the credentials required to either write or both read and write to a Group another Wallet. The Group will be automatically added to any Nodes that have the recipient Wallet stored within them, including Nodes that have viewing-only access to said Wallet.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **addToGroupRequest** | [**AddToGroupRequest**](AddToGroupRequest.md)|  | 

### Return type

[**AddToGroupResponse**](AddToGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentCreateGroupPost**
> CreateGroupResponse AttachmentCreateGroupPost(ctx, createGroupRequest)
Create a new group

Groups are cryptographically-secure permission-sets which allow their members to either write or read/write to the Group (there's no read-only permission). When creating a new Group, a new secret is created which can be used to encrypt Attachments. Attachments can be stored (in encrypted form) in Groups, and Group permissions can be shared with other Wallets.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | 

### Return type

[**CreateGroupResponse**](CreateGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentDownloadPost**
> AttachmentBody AttachmentDownloadPost(ctx, downloadAttachmentRequest)
Download an Attachment

Downloads and decrypts an Attachment given an Attachment ID, and assuming it exists and a Wallet with proper credentials for the relevant Group is used

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **downloadAttachmentRequest** | [**DownloadAttachmentRequest**](DownloadAttachmentRequest.md)|  | 

### Return type

[**AttachmentBody**](AttachmentBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentGetGroupsPost**
> GetGroupsResponse AttachmentGetGroupsPost(ctx, getGroupsRequest)
List the Groups the Wallet has access to

Returns the full list of Groups the Wallet has credentials for (both write-only and read/write).

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **getGroupsRequest** | [**GetGroupsRequest**](GetGroupsRequest.md)|  | 

### Return type

[**GetGroupsResponse**](GetGroupsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentLeaveGroupPost**
> LeaveGroupResponse AttachmentLeaveGroupPost(ctx, leaveGroupRequest)
Removes an owned Wallet from a Group

Deletes any credentials and messages that relate to the given Group and are owned by the given Wallet. Does not affect other Wallets in the same Node. Only owners of Wallets can remove their own Wallets from any given Group.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **leaveGroupRequest** | [**LeaveGroupRequest**](LeaveGroupRequest.md)|  | 

### Return type

[**LeaveGroupResponse**](LeaveGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentListPost**
> ListAttachmentsResponse AttachmentListPost(ctx, listAttachmentsRequest)
Lists available Attachments

Lists the Attachments available for download for a given Wallet, and filtered by further arguments. Note that Attachments must be filtered by exactly one of th e optional filters (transaction hashes or asset IDs).

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **listAttachmentsRequest** | [**ListAttachmentsRequest**](ListAttachmentsRequest.md)|  | 

### Return type

[**ListAttachmentsResponse**](ListAttachmentsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **AttachmentUploadPost**
> UploadAttachmentResponse AttachmentUploadPost(ctx, uploadAttachmentRequest)
Upload an Attachment and share it with a Group

Encrypts and uploads an Attachment so that it becomes shared with a given Group. Returns a globally-unique identifier for the Attachment to be used in subsequent API calls.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **uploadAttachmentRequest** | [**UploadAttachmentRequest**](UploadAttachmentRequest.md)|  | 

### Return type

[**UploadAttachmentResponse**](UploadAttachmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

