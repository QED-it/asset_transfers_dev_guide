package main

import (
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

	balanceRequest := sdk.GetWalletBalanceRequest{
		WalletLabel: "source_wallet",
	}

	balanceResponse, _, err := client.WalletApi.WalletGetWalletBalancesPost(ctx, balanceRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't get wallet balance"))
	}

	for i := range balanceResponse.Assets {
		assetBalance := balanceResponse.Assets[i]
		fmt.Printf("asset %d has balance %d\n", assetBalance.AssetId, assetBalance.Amount)
	}
}


