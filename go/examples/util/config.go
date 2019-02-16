package util

import (
	"flag"
	"fmt"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
	"os"
)

type AssetTransfersConfig struct {
	ServerURL string
	Token     string
}

func parseFlags() (AssetTransfersConfig, error) {
	url := flag.String("url", "", "asset transfers node url (i.e., http://localhost:12052/node")
	token := flag.String("key", "", "API key")

	flag.Parse()

	if *url == "" {
		return AssetTransfersConfig{}, handleFlagParseError(fmt.Errorf("url cannot be empty"))
	}

	return AssetTransfersConfig{
		ServerURL: *url,
		Token:     *token,
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
	clientConfig.AddDefaultHeader("x-auth-token", config.Token)

	client := openapi.NewAPIClient(clientConfig)

	return client, &config, nil
}

func HandleErrorAndExit(err error) {
	fmt.Printf("error: %v\n", err)
	os.Exit(1)
}
