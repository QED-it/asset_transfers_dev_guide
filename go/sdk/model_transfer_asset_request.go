/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.3.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type TransferAssetRequest struct {
	WalletId         string `json:"wallet_id"`
	Authorization    string `json:"authorization"`
	RecipientAddress string `json:"recipient_address"`
	Amount           int32  `json:"amount"`
	AssetId          int32  `json:"asset_id"`
	Memo             string `json:"memo"`
}
