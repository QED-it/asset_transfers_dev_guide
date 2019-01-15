# Asset transfers SDKs

This repository provides the means to operate the QED-it asset transfers node API.

The node exposes an HTTP API, which is specified using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).

The structure of the repository is as follows:
  - [spec](spec) - contains the API specification.
  - [go](go):
    - [sdk](go/sdk) - Go SDK, generated from the API specification.
    - [examples/cmd](go/examples/cmd):
      - [walletbalances](go/examples/cmd/walletbalances): Get wallet balances.
      - [unlock](go/examples/cmd/unlock): Unlock a wallet.
      - [transferandread](go/examples/cmd/transferandread): Transfer between wallets and observe the transfer.
      - [tutorial](go/examples/cmd/tutorial): Follows the [tutorial](https://docs.qed-it.com/docs/qed-solution-docs/en/latest/docs/tutorial.html).
  - [js](js):
    - [sdk](js/sdk) - Javascript SDK, generated from the API specification.

