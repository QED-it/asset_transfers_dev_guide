/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.4.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticTransaction struct {
	Metadata AnalyticsTxMetadata    `json:"metadata,omitempty"`
	Content  map[string]interface{} `json:"content,omitempty"`
}
