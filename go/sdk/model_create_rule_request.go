/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type CreateRuleRequest struct {
	// The ID of the Wallet whose admin credentials should be used to create the new Rules
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet whose admin credentials should be used to create the new Rules
	Authorization string `json:"authorization"`
	// The list of Rules to add to the network
	RulesToAdd []Rule `json:"rules_to_add"`
}
