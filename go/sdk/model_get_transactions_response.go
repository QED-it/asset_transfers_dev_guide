/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type GetTransactionsResponse struct {
	WalletLabel string `json:"wallet_label"`
	Transactions []TransactionsForWallet `json:"transactions"`
}
