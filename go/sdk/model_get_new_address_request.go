/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type GetNewAddressRequest struct {
	// The ID of the Wallet for which to generate an Address
	WalletId string `json:"wallet_id"`
	// An optional 11-byte (22 hexadecimal characters) input which is used to generate different Addresses. A unique Address will be generated for each different diversifier used. If omitted, the Node selects a random diversifier.
	Diversifier string `json:"diversifier,omitempty"`
}
