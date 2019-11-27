# AttachmentHeader

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_id** | **str** | The globally-unique ID of the Attachment; can be used as a reference for downloading it | 
**name** | **str** | A name used by the uploader to describe the Attachment; does not have to be unique; should not be relied upon to uniquely identify the Attachment | 
**content_type** | **str** | The media type (a.k.a. MIME type) of the content as specifies by the uploader of the Attachment | 
**tx_hash** | **str** | The transaction hash for the transaction the Attachment was attached in. Set to empty string if the Wallet is unaware of the particular transaction in which the Attachment was attached to the Asset. | [optional] 
**asset_id** | **str** | The asset ID transferred in the transaction to which this Attachment was attached. | [optional] 
**uploaded_at** | **date** | The time the Attachment was uploaded at, in RFC-3339 format | [optional] 
**content_length_bytes** | **int** | The length in bytes of the raw content of the Attachment | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


