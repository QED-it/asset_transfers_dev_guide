/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetTaskStatusResponse struct {
	// Unique ID of the Task
	Id string `json:"id,omitempty"`
	// UTC time of creation of the Task in RFC-3339 format
	CreatedAt string `json:"created_at,omitempty"`
	// UTC last time the Task was updated in RFC-3339 format
	UpdatedAt string `json:"updated_at,omitempty"`
	Result    Result `json:"result,omitempty"`
	// More granular current state of the Task; list of supported states is not guaranteed to be stable
	State string `json:"state,omitempty"`
	// The Blockchain-generated hash of the Transaction; populated after the Blockchain Node accepted the Transaction
	TxHash string `json:"tx_hash,omitempty"`
	// The QEDIT-generated hash of the Transaction; generated after proof generation, but prior to Broadcast by the QEDIT Node
	QeditTxHash string   `json:"qedit_tx_hash,omitempty"`
	Type        TaskType `json:"type,omitempty"`
	// Container for the Transaction data; each Transaction type has different fields
	Data map[string]interface{} `json:"data,omitempty"`
	// In case of failure this field reports the reason for the failure
	Error string `json:"error,omitempty"`
}
