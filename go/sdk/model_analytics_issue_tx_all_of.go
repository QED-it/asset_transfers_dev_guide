/*
 * QEDIT – Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.2.3
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsIssueTxAllOf struct {
	Outputs   []AnalyticsOutput `json:"outputs,omitempty"`
	PublicKey string            `json:"public_key,omitempty"`
	Signature string            `json:"signature,omitempty"`
}
