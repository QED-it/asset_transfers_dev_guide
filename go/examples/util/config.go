package util

import (
	"flag"
	"fmt"
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
	"os"
	"strings"
)

type AssetTransfersConfig struct {
	ServerURL string
	Token     string
}

func parseFlags() (AssetTransfersConfig, error) {
	url := flag.String("url", "", "asset transfers node url (i.e., http://localhost:12052")
	token := flag.String("key", "", "API key")

	flag.Parse()

	if *url == "" {
		return AssetTransfersConfig{}, handleFlagParseError(fmt.Errorf("url cannot be empty"))
	}

	httpPrefix := "http://"
	rawUrl := *url
	if !strings.HasPrefix(rawUrl, httpPrefix) {
		rawUrl = httpPrefix + rawUrl
	}

	portSuffix := ":12052"
	if !strings.HasSuffix(rawUrl, portSuffix) {
		rawUrl = rawUrl + portSuffix
	}

	return AssetTransfersConfig{
		ServerURL: rawUrl,
		Token:     *token,
	}, nil
}

func handleFlagParseError(err error) error {
	flag.PrintDefaults()
	return err
}

func InitAPIClient() (*sdk.APIClient, *AssetTransfersConfig, error) {
	config, err := parseFlags()
	if err != nil {
		return nil, nil, err
	}

	clientConfig := sdk.NewConfiguration()
	clientConfig.BasePath = config.ServerURL
	clientConfig.AddDefaultHeader("x-auth-token", config.Token)

	client := sdk.NewAPIClient(clientConfig)

	return client, &config, nil
}

func HandleErrorAndExit(err error) {
	fmt.Printf("error: %v\n", err)
	os.Exit(1)
}
