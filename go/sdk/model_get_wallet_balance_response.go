/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.2.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetWalletBalanceResponse struct {
	WalletId string `json:"wallet_id"`
	Assets []BalanceForAsset `json:"assets"`
}
