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

type GenerateWalletRequest struct {
	// The ID under which to create the Wallet; must be unique within the Node
	WalletId string `json:"wallet_id"`
	// The authorizarion password under which to encrypt the generated Wallet's secret key; will be required in order to perform actions using the Wallet
	Authorization string `json:"authorization"`
}