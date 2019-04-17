package main

import (
	"context"
	"fmt"

	"github.com/QED-it/asset_transfers_dev_guide/go/examples/util"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
)

func main() {
	client, _, err := util.InitAPIClient()
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get a valid config"))
	}

	ctx := context.Background()

	generateWalletRequest := sdk.GenerateWalletRequest{
		WalletId:      "Jane",
		Authorization: "123456",
	}

	_, err = client.NodeApi.NodeGenerateWalletPost(ctx, generateWalletRequest)
	if err != nil {
		fmt.Printf("Could not generate Jane's wallet, %v\n", util.ErrorResponseString(err))
	}

	importWalletRequest := sdk.ImportWalletRequest{
		WalletId:      "bank",
		EncryptedSk:   "2b9a24e2eafce806cde2f03cae49a840ee4cfb408163c8d2de8264e3552b18ab5debc1def1fb446742cbec99f42ba9e2",
		Authorization: "123",
		Salt:          "2829ca5659464e6a825b0ab19d1ac444878b8a3bb1093fb54f629ae4c1ef384d",
	}

	_, err = client.NodeApi.NodeImportWalletPost(ctx, importWalletRequest)
	if err != nil {
		fmt.Printf("Could not import the bank's wallet, %v\n", util.ErrorResponseString(err))
	}

	getNewAddressRequest := sdk.GetNewAddressRequest{
		WalletId: "Jane",
		Diversifier: "69be9d33a15535a59dd111",
	}

	getNewAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, getNewAddressRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't generate address: %v", util.ErrorResponseString(err)))
	}

	fmt.Printf("Jane's address details: %v\n", getNewAddressResponse)

	issueAssetRequest := sdk.IssueAssetRequest{
		WalletId:         "bank",
		Authorization:    "123",
		RecipientAddress: getNewAddressResponse.RecipientAddress,
		AssetId:          200,
		Amount:           1,
		Confidential:     false,
		Memo:             "this is for you, Jane",
	}

	asyncTask, _, err := client.WalletApi.WalletIssueAssetPost(ctx, issueAssetRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't issue asset: %v", util.ErrorResponseString(err)))
	}

	issueTaskStatus, err := util.WaitForAsyncTaskDone(ctx, asyncTask.Id, client)
	if err != nil {
		util.HandleErrorAndExit(err)
	}
	if issueTaskStatus.Result != "success" { // Or == "failure"
		util.HandleErrorAndExit(fmt.Errorf("couldn't issue asset: %v\nDid you configure the bank's private key?", issueTaskStatus.Error))
	}

	getWalletBalancesRequest := sdk.GetWalletBalanceRequest{
		WalletId: "Jane",
	}

	getWalletBalancesResponse, _, err := client.WalletApi.WalletGetBalancesPost(ctx, getWalletBalancesRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get wallet balances: %v", util.ErrorResponseString(err)))
	}

	fmt.Printf("Jane's wallet balances: %v\n", getWalletBalancesResponse)

	getTransactionsRequest := sdk.GetTransactionsRequest{
		WalletId:        "Jane",
		StartIndex:      0,
		NumberOfResults: 10,
	}

	getTransactionsResponse, _, err := client.WalletApi.WalletGetActivityPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", util.ErrorResponseString(err)))
	}

	fmt.Printf("Jane's transactions: %v\n", getTransactionsResponse)
	newBankAddressRequest := sdk.GetNewAddressRequest{
		WalletId: "bank",
	}

	newBankAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, newBankAddressRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't generate address for bank wallet: %v", util.ErrorResponseString(err)))
	}

	transferAssetRequest := sdk.TransferAssetRequest{
		WalletId:         "Jane",
		Authorization:    "123456",
		RecipientAddress: newBankAddressResponse.RecipientAddress,
		AssetId:          200,
		Amount:           1,
		Memo:             "Getting rid of my asset",
	}

	asyncTask, _, err = client.WalletApi.WalletTransferAssetPost(ctx, transferAssetRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't transfer asset: %v", util.ErrorResponseString(err)))
	}

	transferTaskStatus, err := util.WaitForAsyncTaskDone(ctx, asyncTask.Id, client)
	if err != nil {
		util.HandleErrorAndExit(err)
	}
	if transferTaskStatus.Result != "success" { // or == "failure"
		util.HandleErrorAndExit(fmt.Errorf("couldn't transfer asset: %v\nDoes Jane have sufficient balance?", transferTaskStatus.Error))
	}

	getTransactionsResponse, _, err = client.WalletApi.WalletGetActivityPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", util.ErrorResponseString(err)))
	}

	fmt.Printf("Jane's transactions: %v\n", getTransactionsResponse)

}
