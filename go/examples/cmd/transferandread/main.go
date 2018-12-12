package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"github.com/QED-it/asset_transfers_dev_guide/go/examples/util"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
	"context"
)

func main() {
	client, _, err := util.InitAPIClient()
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get a valid config"))
	}

	ctx := context.Background()

	// START get address of destination wallet
	diversifier := make([]byte, 11)
	_, err = rand.Read(diversifier)
	if err != nil {
		util.HandleErrorAndExit(err)
	}

	getNewAddressRequest := openapi.GetNewAddressRequest{
		WalletLabel: "dest_wallet",
		Diversifier: hex.EncodeToString(diversifier),
	}

	getNewAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, getNewAddressRequest)
	// END get address of destination wallet

	// START unlock source wallet
	unlockRequest := openapi.UnlockWalletRequest{
		WalletLabel: "source_wallet",
		Authorization: "PrivacyIsAwesome",
		Seconds: 600,
	}

	_, err = client.NodeApi.NodeUnlockWalletPost(ctx, unlockRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %v", err))
	}
	// END unlock source wallet

	// START transfer from source to destination
	transferRequest := openapi.TransferAssetRequest{
		WalletLabel: "source_wallet",
		AssetId: 10,
		Amount: 50,
		RecipientAddress: openapi.TransferAssetRequestRecipientAddress{
			D: getNewAddressResponse.RecipientAddress.D,
			Pkd: getNewAddressResponse.RecipientAddress.Pkd,
		},
		Memo: "hello there!",
		Authorization: "PrivacyIsAwesome",
	}
	_, err = client.WalletApi.WalletTransferAssetPost(ctx, transferRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't transfer: %v", err))
	}
	// END transfer from source to destination

	// START read transactions in the destination wallet and find this transfer
	getTransactionsRequest := openapi.GetTransactionsRequest{
		WalletLabel: "dest_wallet",
		NumberOfResults: 1000,
		StartIndex: 0,
	}

	getTransactionsResponse, _, err := client.AnalyticsApi.AnalyticsGetTransactionsPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", err))
	}

	lastTx := getTransactionsResponse.Transactions[len(getTransactionsResponse.Transactions) - 1]
	fmt.Printf("got an asset with asset ID %d, amount %d and memo \"%s\"", lastTx.AssetId, lastTx.Amount, lastTx.Memo)
	// END read transactions in the destination wallet and find this transfer
}


