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

	unlockRequest := goqedit.UnlockWalletRequest{
		WalletId:      "source_wallet",
		Authorization: "PrivacyIsAwesome",
		Seconds:       600,
	}

	unlockWalletTask, _, err := client.NodeApi.NodeUnlockWalletPost(ctx, unlockRequest)
	if err != nil {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %s", util.ErrorResponseString(err)))
	}

	unlockWalletStatus, err := util.WaitForAsyncTaskDone(ctx, unlockWalletTask.Id, client)
	if err != nil {
		util.HandleErrorAndExit(err)
	}
	if unlockWalletStatus.Result != "success" {
		util.HandleErrorAndExit(fmt.Errorf("couldn't unlock wallet: %s", unlockWalletStatus.Error))
	} else {
		fmt.Println("wallet unlocked successfully")
	}
}
