/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetSyncStatusResponse struct {
	// Boolean signifying whether the QEDIT Node is in sync with the Blockchain; false if the Node is not synced; sync is defined as having less than a preconfigured difference between the current Blockchain height and the last block processed by the Node; the allowed difference defaults to 5, but can be configured when setting up the Node
	InSync bool `json:"in_sync,omitempty"`
	// The current block height of the Blockchain
	BlockchainBlockHeight int32 `json:"blockchain_block_height,omitempty"`
	// The height of the last block that was processed in the Node
	LastProcessedBlockHeight int32 `json:"last_processed_block_height,omitempty"`
}
