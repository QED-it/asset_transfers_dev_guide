package main

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"

	"github.com/mitchellh/mapstructure"

	"github.com/QED-it/goqedit"
	"github.com/QED-it/goqedit/examples/util"
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

	getNewAddressRequest := goqedit.GetNewAddressRequest{
		WalletId:    "dest_wallet",
		Diversifier: hex.EncodeToString(diversifier),
	}

	getNewAddressResponse, _, err := client.WalletApi.WalletGetNewAddressPost(ctx, getNewAddressRequest)
	// END get address of destination wallet

	// START unlock source wallet
	unlockRequest := goqedit.UnlockWalletRequest{
		WalletId:      "source_wallet",
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
	transferRequest := goqedit.TransferAssetRequest{
		WalletId:         "source_wallet",
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
	getActivityRequest := goqedit.GetWalletActivityRequest{
		WalletId:        "dest_wallet",
		NumberOfResults: 1000,
		StartIndex:      0,
	}

	getTransactionsResponse, _, err := client.WalletApi.WalletGetActivityPost(ctx, getActivityRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get transactions: %v", err))
	}

	lastTx := getTransactionsResponse.Transactions[len(getTransactionsResponse.Transactions)-1]

	switch lastTx.Metadata.Type {
	case "Issue":
		var txContent goqedit.AnalyticIssueWalletTx
		err := mapstructure.Decode(lastTx.Content, &txContent)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("got an issue-tx with asset ID %s, amount %d and memo \"%s\"", txContent.AssetId, txContent.Amount, txContent.Memo)

	case "Transfer":
		var txContent goqedit.AnalyticTransferWalletTx
		err := mapstructure.Decode(lastTx.Content, &txContent)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("got an transfer-tx with asset ID %s, amount %d and memo \"%s\"", txContent.AssetId, txContent.Amount, txContent.Memo)

	}
}
