# AttachmentHeader

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachmentId** | **string** | The globally-unique ID of the Attachment; can be used as a reference for downloading it | 
**Name** | **string** | A name used by the uploader to describe the Attachment; does not have to be unique; should not be relied upon to uniquely identify the Attachment | 
**ContentType** | **string** | The media type (a.k.a. MIME type) of the content as specifies by the uploader of the Attachment | 
**TxHash** | **string** | The transaction hash for the transaction the Attachment was attached in. Set to empty string if the Wallet is unaware of the particular transaction in which the Attachment was attached to the Asset. | [optional] 
**AssetId** | **string** | The asset ID transferred in the transaction to which this Attachment was attached. | [optional] 
**UploadedAt** | **string** | The time the Attachment was uploaded at, in RFC-3339 format | [optional] 
**ContentLengthBytes** | **int64** | The length in bytes of the raw content of the Attachment | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


