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

type GroupInformation struct {
	// The unique identifier of the Group
	GroupId string `json:"group_id"`
	// Timestamp of when the Group credentials were shared with the Wallet. The timestamp is in RFC-3339 format.
	JoinedAt string `json:"joined_at"`
	// Boolean set to true if and only if read permission for the given Group was shared with the given Wallet. Note that write access is always shared.
	ReadPermission bool `json:"read_permission"`
	// The memo used by the application that first shared this Group with the given Wallet when calling `add_to_group`.
	Memo string `json:"memo"`
}
