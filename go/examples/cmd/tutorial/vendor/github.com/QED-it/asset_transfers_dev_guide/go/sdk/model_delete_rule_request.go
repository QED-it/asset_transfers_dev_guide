/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type DeleteRuleRequest struct {
	WalletLabel string `json:"wallet_label"`
	Authorization string `json:"authorization"`
	RulesToDelete []Rule `json:"rules_to_delete"`
}