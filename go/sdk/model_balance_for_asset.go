/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.5.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type BalanceForAsset struct {
	// The ID of the Asset Type
	AssetId int32 `json:"asset_id"`
	// The outstanding balance for the Asset Type
	Amount int32 `json:"amount"`
}
