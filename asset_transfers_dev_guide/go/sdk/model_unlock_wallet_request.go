/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.3.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type UnlockWalletRequest struct {
	WalletId      string `json:"wallet_id"`
	Authorization string `json:"authorization"`
	Seconds       int32  `json:"seconds"`
}
