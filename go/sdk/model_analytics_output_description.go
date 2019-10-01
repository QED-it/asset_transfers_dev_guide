/*
 * QEDIT - Asset Transfers
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.6.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package sdk

type AnalyticsOutputDescription struct {
	// The commitment to both the Asset Type and amount of the Note
	Cv string `json:"cv,omitempty"`
	// The commitment to the entire Note
	Cm string `json:"cm,omitempty"`
	// The Proof that the commitments match
	Zkproof string `json:"zkproof,omitempty"`
	// The ephemeral public key used to encrypt the Note contents for the receiver
	Epk string `json:"epk,omitempty"`
	// The Note encryption for the receiver
	EncNote string `json:"enc_note,omitempty"`
	// The Note encryption for the sender
	EncSender string `json:"enc_sender,omitempty"`
}
