/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.4.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type DeleteRuleRequest struct {
	WalletId      string `json:"wallet_id"`
	Authorization string `json:"authorization"`
	RulesToDelete []Rule `json:"rules_to_delete"`
}
