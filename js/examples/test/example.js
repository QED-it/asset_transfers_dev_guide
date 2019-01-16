const Promise = require("bluebird");
const log = console.log;

const QeditAssetTransfers = require("QED-it-asset-transfers");
const apiClient = new QeditAssetTransfers.ApiClient();

// Configure API URL and key.
apiClient.basePath = process.env.QEDIT_URL || "http://localhost:12052";
apiClient.authentications.ApiKeyAuth.apiKey = process.env.QEDIT_API_KEY;

const nodeApi = new QeditAssetTransfers.NodeApi(apiClient);
const walletApi = new QeditAssetTransfers.WalletApi(apiClient);
const analyticsApi = new QeditAssetTransfers.AnalyticsApi(apiClient);
Promise.promisifyAll(nodeApi);
Promise.promisifyAll(walletApi);
Promise.promisifyAll(analyticsApi);


describe("Asset Transfers Example", () => {

    it("issue and transfer", async () => {
        log("")

        try {
            await nodeApi.nodeGenerateWalletPostAsync({
                wallet_label: "Jane",
                authorization: "123456",
            })
        } catch (err) {
            log("Could not generate Jane's wallet, assuming that it already exists.")
        }

        try {
            await nodeApi.nodeImportWalletPostAsync({
                wallet_label: "bank",
                encrypted_sk: "2b9a24e2eafce806cde2f03cae49a840ee4cfb408163c8d2de8264e3552b18ab5debc1def1fb446742cbec99f42ba9e2",
                authorization: "123",
                salt: "2829ca5659464e6a825b0ab19d1ac444878b8a3bb1093fb54f629ae4c1ef384d",
            })
        } catch (err) {
            log("Could not import the bank's wallet, assuming that it already exists.")
        }
        log("")

        const janeAddress = await walletApi.walletGetNewAddressPostAsync({
            wallet_label: "Jane",
            diversifier: "69be9d33a15535a59dd111",
        })

        log("Jane's address details:", janeAddress.recipient_address)

        try {
            await walletApi.walletIssueAssetPostAsync({
                wallet_label: "bank",
                authorization: "123",
                recipient_address: janeAddress.recipient_address,
                asset_id: 200,
                amount: 1,
                clear_value: true,
                memo: "this is for you, Jane",
            })
        } catch (err) {
            log("Could not issue asset. Did you configure the bank's private key?")
        }
        log("")

        const balancesBefore = await walletApi.walletGetWalletBalancesPostAsync({
            wallet_label: "Jane",
        })
        log("Jane's wallet assets:", balancesBefore.assets)

        const transactionsBefore = await analyticsApi.analyticsGetTransactionsPostAsync({
            wallet_label: "Jane",
            start_index: 0,
            number_of_results: 10,
        })
        log("Jane's transactions: ", transactionsBefore.transactions)
        log("")

        try {
            await walletApi.walletTransferAssetPostAsync({
                wallet_label: "Jane",
                recipient_address: {
                    d: "69be9d33a15535a59dd111",
                    pkd: "bed104e2358a36053fb3a5dacb4ed34a2a612a2e10aa521dd166032e9b3343d5",
                },
                asset_id: 200,
                amount: 1,
                memo: "Getting rid of my asset",
            })
        } catch (err) {
            log("Could not transfer asset. Does Jane have sufficient balance?")
        }
        log("")

        const balancesAfter = await walletApi.walletGetWalletBalancesPostAsync({
            wallet_label: "Jane",
        })
        log("Jane's wallet assets: ", balancesAfter.assets)

        const transactionsAfter = await analyticsApi.analyticsGetTransactionsPostAsync({
            wallet_label: "Jane",
            start_index: 0,
            number_of_results: 10,
        })
        log("Jane's transactions: ", transactionsAfter.transactions)
        log("")
    });


    it("can query blocks", async () => {
        const blocks = await analyticsApi.analyticsGetBlocksPostAsync({
            start_index: 0,
            number_of_results: 2,
        });
        console.log("blocks", blocks);
    });
});
