package util

import (
	"flag"
	"fmt"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
	"os"
)

type AssetTransfersConfig struct {
	ServerURL string
}

func parseFlags() (AssetTransfersConfig, error) {
	url := flag.String("url", "", "asset transfers node url (i.e., http://localhost:12052/node")

	flag.Parse()

	if *url == "" {
		return AssetTransfersConfig{}, handleFlagParseError(fmt.Errorf("url cannot be empty"))
	}

	return AssetTransfersConfig{
		ServerURL: *url,
	}, nil
}

func handleFlagParseError(err error) error {
	flag.PrintDefaults()
	return err
}

func InitAPIClient() (*openapi.APIClient, *AssetTransfersConfig, error) {
	config, err := parseFlags()
	if err != nil {
		return nil, nil, err
	}

	clientConfig := openapi.NewConfiguration()
	clientConfig.BasePath = config.ServerURL

	client := openapi.NewAPIClient(clientConfig)

	return client, &config, nil
}

func HandleErrorAndExit(err error) {
	fmt.Printf("error: %v\n", err)
	os.Exit(1)
}
