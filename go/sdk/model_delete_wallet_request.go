/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type DeleteWalletRequest struct {
	// The ID of the Wallet to delete
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet
	Authorization string `json:"authorization,omitempty"`
}
