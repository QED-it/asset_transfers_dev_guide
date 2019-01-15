package main

import (
	"context"
	"fmt"
	"github.com/QED-it/asset_transfers_dev_guide/go/examples/util"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
	"time"
)

func main() {
	client, _, err := util.InitAPIClient()
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get a valid config"))
	}

	ctx := context.Background()

	generateWalletRequest := openapi.GenerateWalletRequest{
		WalletLabel:   "Jane",
		Authorization: "123456",
	}

	_, err = client.NodeApi.NodeGenerateWalletPost(ctx, generateWalletRequest)
	if err != nil {
		fmt.Printf("Could not generate Jane's wallet, assuming that it already exists.\n")
	}

	importWalletRequest := openapi.ImportWalletRequest{
		WalletLabel:   "bank",
		EncryptedSk:   "YOUR_PRIVATE_KEY",
		Authorization: "123456",
		Salt:          "bed104e2358a36053fb3a5dacb4ed34a2a612a2e10aa521dd166032e9b3343d5",
	}

	_, err = client.NodeApi.NodeImportWalletPost(ctx, importWalletRequest)
	if err != nil {
		fmt.Printf("Could not import the bank's wallet, assuming that it already exists.\n")
	}

	getNewAddressRequest := openapi.GetNewAddressRequest{
		WalletLabel: "Jane",
		Diversifier: "69be9d33a15535a59dd111",
	}

	getNewAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, getNewAddressRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't generate address: %v", err))
	}

	fmt.Printf("Jane's address details: %v\n", getNewAddressResponse)

	issueAssetRequest := openapi.IssueAssetRequest{
		WalletLabel: "bank",
		RecipientAddress: openapi.TransferAssetRequestRecipientAddress{
			D:   "69be9d33a15535a59dd111",
			Pkd: "bed104e2358a36053fb3a5dacb4ed34a2a612a2e10aa521dd166032e9b3343d5",
		},
		AssetId:    200,
		Amount:     1,
		ClearValue: true,
		Memo:       "this is for you, Jane",
	}

	_, err = client.WalletApi.WalletIssueAssetPost(ctx, issueAssetRequest)
	if err != nil {
		fmt.Printf("Could not issue asset. Did you configure the bank's private key?\n")
	}

	time.Sleep(20)

	getWalletBalancesRequest := openapi.GetWalletBalanceRequest{
		WalletLabel: "Jane",
	}

	getWalletBalancesResponse, _, err := client.WalletApi.WalletGetWalletBalancesPost(ctx, getWalletBalancesRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get wallet balances: %v", err))
	}

	fmt.Printf("Jane's wallet balances: %v\n", getWalletBalancesResponse)

	getTransactionsRequest := openapi.GetTransactionsRequest{
		WalletLabel:     "Jane",
		StartIndex:      0,
		NumberOfResults: 10,
	}

	getTransactionsResponse, _, err := client.AnalyticsApi.AnalyticsGetTransactionsPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", err))
	}

	fmt.Printf("Jane's transactions: %v\n", getTransactionsResponse)

	transferAssetRequest := openapi.TransferAssetRequest{
		WalletLabel: "Jane",
		RecipientAddress: openapi.TransferAssetRequestRecipientAddress{
			D:   "69be9d33a15535a59dd111",
			Pkd: "bed104e2358a36053fb3a5dacb4ed34a2a612a2e10aa521dd166032e9b3343d5",
		},
		AssetId: 200,
		Amount:  1,
		Memo:    "Getting rid of my asset",
	}

	_, err = client.WalletApi.WalletTransferAssetPost(ctx, transferAssetRequest)
	if err != nil {
		fmt.Printf("Could not transfer asset. Does Jane have sufficient balance?\n")
	}

	time.Sleep(20)

	getTransactionsResponse, _, err = client.AnalyticsApi.AnalyticsGetTransactionsPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", err))
	}

	fmt.Printf("Jane's transactions: %v\n", getTransactionsResponse)

}
