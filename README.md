# Asset transfers developer guide

This repository provides the means to operate the QED-it asset transfers node API.

The node exposes an HTTP API, which is specified using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).

The structure of the repository is as follows:
  - [spec](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/spec) - contains the API specification.
  - [go](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go):
    - [sdk](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go/sdk) - Go SDK, generated from the API specification.
    - [examples/cmd](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go/examples/cmd):
      - [walletbalances](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go/examples/cmd/walletbalances): Get wallet balances.
      - [unlock](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go/examples/cmd/unlock): Unlock a wallet.
      - [transferandread](https://github.com/QED-it/asset_transfers_dev_guide/tree/master/go/examples/cmd/transferandread): Transfer between wallets and observe the transfer.
