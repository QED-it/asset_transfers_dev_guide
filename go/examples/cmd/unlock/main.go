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

	unlockRequest := openapi.UnlockWalletRequest{
		WalletLabel: "source_wallet",
		Authorization: "PrivacyIsAwesome",
		Seconds: 600,
	}

	_, err = client.NodeApi.NodeUnlockWalletPost(ctx, unlockRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet"))
	}
}


