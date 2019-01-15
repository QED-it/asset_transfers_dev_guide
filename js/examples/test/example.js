const Promise = require('bluebird');

const QeditAssetTransfers = require('QED-it-asset-transfers');
const apiClient = new QeditAssetTransfers.ApiClient();

// Configure API URL and key.
apiClient.basePath = process.env.QEDIT_URL || 'http://localhost:12052';
apiClient.authentications.ApiKeyAuth.apiKey = process.env.QEDIT_API_KEY;

const walletApi = new QeditAssetTransfers.WalletApi(apiClient);
const analyticsApi = new QeditAssetTransfers.AnalyticsApi(apiClient);
Promise.promisifyAll(walletApi);
Promise.promisifyAll(analyticsApi);


describe('Asset Transfers Example', () => {

    it('queries blocks', async () => {
        const blocks = await analyticsApi.analyticsGetBlocksPostAsync({
            start_index: 0,
            number_of_results: 10,
        });
        console.log('blocks', blocks);

    });
});
