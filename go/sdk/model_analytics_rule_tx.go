/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.2.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsRuleTx struct {
	SenderPublicKey string `json:"sender_public_key,omitempty"`
	RulesToAdd AnalyticsRuleDefinition `json:"rules_to_add,omitempty"`
	RulesToDelete AnalyticsRuleDefinition `json:"rules_to_delete,omitempty"`
}
