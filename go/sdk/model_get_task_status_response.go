/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.2.2
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetTaskStatusResponse struct {
	Id string `json:"id,omitempty"`
	CreatedAt string `json:"created_at,omitempty"`
	UpdatedAt string `json:"updated_at,omitempty"`
	Result string `json:"result,omitempty"`
	TxHash string `json:"tx_hash,omitempty"`
	Type string `json:"type,omitempty"`
	Data map[string]interface{} `json:"data,omitempty"`
	Error string `json:"error,omitempty"`
}
