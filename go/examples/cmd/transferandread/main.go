package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
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

	// START get address of destination wallet
	diversifier := make([]byte, 11)
	_, err = rand.Read(diversifier)
	if err != nil {
		util.HandleErrorAndExit(err)
	}

	getNewAddressRequest := sdk.GetNewAddressRequest{
		WalletId: "dest_wallet",
		Diversifier: hex.EncodeToString(diversifier),
	}

	getNewAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, getNewAddressRequest)
	// END get address of destination wallet

	// START unlock source wallet
	unlockRequest := sdk.UnlockWalletRequest{
		WalletId:   "source_wallet",
		Authorization: "PrivacyIsAwesome",
		Seconds:       600,
	}

	unlockWalletTask, _, err := client.NodeApi.NodeUnlockWalletPost(ctx, unlockRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %v", util.ErrorResponseString(err)))
	}
	unlockWalletStatus, err := util.WaitForAsyncTaskDone(ctx, unlockWalletTask.Id, client)
	if err != nil {
		util.HandleErrorAndExit(err)
	}
	if unlockWalletStatus.Result != "success" {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %s", unlockWalletStatus.Error))
	}
	// END unlock source wallet

	// START transfer from source to destination
	transferRequest := sdk.TransferAssetRequest{
		WalletId:      "source_wallet",
		Authorization:    "PrivacyIsAwesome",
		AssetId:          10,
		Amount:           50,
		RecipientAddress: getNewAddressResponse.RecipientAddress,
		Memo:             "hello there!",
	}
	transferAssetTask, _, err := client.WalletApi.WalletTransferAssetPost(ctx, transferRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't transfer: %v", util.ErrorResponseString(err)))
	}
	transferAssetStatus, err := util.WaitForAsyncTaskDone(ctx, transferAssetTask.Id, client)
	if err != nil {
		util.HandleErrorAndExit(err)
	}
	if transferAssetStatus.Result != "success" {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %s", transferAssetStatus.Error))
	}
	// END transfer from source to destination

	// START read transactions in the destination wallet and find this transfer
	getTransactionsRequest := sdk.GetTransactionsRequest{
		WalletId:     "dest_wallet",
		NumberOfResults: 1000,
		StartIndex:      0,
	}

	getTransactionsResponse, _, err := client.WalletApi.WalletGetWalletActivitiesPost(ctx, getTransactionsRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", err))
	}

	lastTx := getTransactionsResponse.Transactions[len(getTransactionsResponse.Transactions)-1]
	fmt.Printf("got an asset with asset ID %d, amount %d and memo \"%s\"", lastTx.AssetId, lastTx.Amount, lastTx.Memo)
	// END read transactions in the destination wallet and find this transfer
}
