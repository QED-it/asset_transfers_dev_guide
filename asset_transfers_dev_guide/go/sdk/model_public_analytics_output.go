/*
 * QEDIT – Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.2.3
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type PublicAnalyticsOutput struct {
	IsConfidential            bool                               `json:"is_confidential"`
	OutputDescription         AnalyticsOutputDescription         `json:"output_description"`
	PublicIssuanceDescription AnalyticsPublicIssuanceDescription `json:"public_issuance_description"`
}
