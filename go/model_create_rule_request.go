/*
 * QEDIT - Asset Transfers
 *
 * This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/). 
 *
 * API version: 1.7.2
 * Contact: dev@qed-it.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package goqedit

type CreateRuleRequest struct {
	// The ID of the Wallet whose admin credentials should be used to create the new Rules
	WalletId string `json:"wallet_id"`
	// The authorization password for the Wallet whose admin credentials should be used to create the new Rules
	Authorization string `json:"authorization"`
	// The list of Rules to add to the network
	RulesToAdd []Rule `json:"rules_to_add"`
}
