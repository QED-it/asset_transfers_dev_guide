/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.4.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsSpendDescription struct {
	Cv        string `json:"cv,omitempty"`
	Anchor    string `json:"anchor,omitempty"`
	Nullifier string `json:"nullifier,omitempty"`
	RkOut     string `json:"rk_out,omitempty"`
	Zkproof   string `json:"zkproof,omitempty"`
}
