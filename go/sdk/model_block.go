/*
 * QED-it - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type Block struct {
	BlockHash string `json:"block_hash"`
	Height int32 `json:"height"`
	Transactions []string `json:"transactions"`
}
