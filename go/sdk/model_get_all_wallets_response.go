/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetAllWalletsResponse struct {
	// The IDs of the Wallets currently active in this Node
	WalletIds []string `json:"wallet_ids,omitempty"`
}
