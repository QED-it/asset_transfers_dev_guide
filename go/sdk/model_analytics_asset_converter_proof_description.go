/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.3.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsAssetConverterProofDescription struct {
	InputCv  string `json:"input_cv,omitempty"`
	AmountCv string `json:"amount_cv,omitempty"`
	AssetCv  string `json:"asset_cv,omitempty"`
	Zkproof  string `json:"zkproof,omitempty"`
}
