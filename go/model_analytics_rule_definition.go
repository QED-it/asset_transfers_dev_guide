/*
 * QEDIT - Asset Transfers
 *
 * This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/). 
 *
 * API version: 1.7.0
 * Contact: dev@qed-it.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package goqedit

type AnalyticsRuleDefinition struct {
	// The public key of the Wallet that is being granted rights in this Rule
	PublicKey string `json:"public_key,omitempty"`
	// Boolean signifying whether the Rule grants admin rights
	IsAdmin bool `json:"is_admin,omitempty"`
	// A `Namespace` describes what Asset IDs can be issued in an Issuance Rule. It is a string in the same format as `AssetId`. Additionally, if it ends with a wildcard character `*`, then the namespace covers all asset IDs with the namespace as a prefix. Without a final wildcard, the namespace covers exactly one asset ID. Example: The namespace `currencies.dollar` covers only this exact asset type, while `currencies.*` covers all asset types that start with `currencies.`. 
	Namespace string `json:"namespace,omitempty"`
	// Boolean signifying whether the Rule grants confidentialy issuance rights; if true, then both public and confidential issuance right are granted; if false, then only public issuance rights are granted
	CanIssueConfidentially bool `json:"can_issue_confidentially,omitempty"`
}
