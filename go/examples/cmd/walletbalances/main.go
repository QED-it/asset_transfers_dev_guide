package main

import (
	"context"
	"fmt"

	"github.com/QED-it/goqedit"
	"github.com/QED-it/goqedit/examples/util"
)

func main() {
	client, _, err := util.InitAPIClient()
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get a valid config"))
	}

	ctx := context.Background()

	balanceRequest := goqedit.GetWalletBalanceRequest{
		WalletId: "source_wallet",
	}

	balanceResponse, _, err := client.WalletApi.WalletGetBalancesPost(ctx, balanceRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get wallet balance"))
	}

	for i := range balanceResponse.Assets {
		assetBalance := balanceResponse.Assets[i]
		fmt.Printf("asset %s has balance %d\n", assetBalance.AssetId, assetBalance.Amount)
	}
}
