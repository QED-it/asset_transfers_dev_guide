/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetWalletActivityRequest struct {
	// The ID of the Wallet for which to retrieve activity history
	WalletId string `json:"wallet_id"`
	// An offset used to paginate through the activity history; indexing is 0-based
	StartIndex int32 `json:"start_index"`
	// Maximal number of results to fetch in this call
	NumberOfResults int32 `json:"number_of_results"`
}
