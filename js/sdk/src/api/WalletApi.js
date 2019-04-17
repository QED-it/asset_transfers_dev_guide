/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.2
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AsyncTaskCreatedResponse', 'model/CreateRuleRequest', 'model/DeleteRuleRequest', 'model/ErrorResponse', 'model/GetActivityRequest', 'model/GetActivityResponse', 'model/GetNewAddressRequest', 'model/GetNewAddressResponse', 'model/GetPublicKeyRequest', 'model/GetPublicKeyResponse', 'model/GetWalletBalanceRequest', 'model/GetWalletBalanceResponse', 'model/IssueAssetRequest', 'model/TransferAssetRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncTaskCreatedResponse'), require('../model/CreateRuleRequest'), require('../model/DeleteRuleRequest'), require('../model/ErrorResponse'), require('../model/GetActivityRequest'), require('../model/GetActivityResponse'), require('../model/GetNewAddressRequest'), require('../model/GetNewAddressResponse'), require('../model/GetPublicKeyRequest'), require('../model/GetPublicKeyResponse'), require('../model/GetWalletBalanceRequest'), require('../model/GetWalletBalanceResponse'), require('../model/IssueAssetRequest'), require('../model/TransferAssetRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.WalletApi = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AsyncTaskCreatedResponse, root.QedItAssetTransfers.CreateRuleRequest, root.QedItAssetTransfers.DeleteRuleRequest, root.QedItAssetTransfers.ErrorResponse, root.QedItAssetTransfers.GetActivityRequest, root.QedItAssetTransfers.GetActivityResponse, root.QedItAssetTransfers.GetNewAddressRequest, root.QedItAssetTransfers.GetNewAddressResponse, root.QedItAssetTransfers.GetPublicKeyRequest, root.QedItAssetTransfers.GetPublicKeyResponse, root.QedItAssetTransfers.GetWalletBalanceRequest, root.QedItAssetTransfers.GetWalletBalanceResponse, root.QedItAssetTransfers.IssueAssetRequest, root.QedItAssetTransfers.TransferAssetRequest);
  }
}(this, function(ApiClient, AsyncTaskCreatedResponse, CreateRuleRequest, DeleteRuleRequest, ErrorResponse, GetActivityRequest, GetActivityResponse, GetNewAddressRequest, GetNewAddressResponse, GetPublicKeyRequest, GetPublicKeyResponse, GetWalletBalanceRequest, GetWalletBalanceResponse, IssueAssetRequest, TransferAssetRequest) {
  'use strict';

  /**
   * Wallet service.
   * @module api/WalletApi
   * @version 1.2.2
   */

  /**
   * Constructs a new WalletApi. 
   * @alias module:api/WalletApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create &amp; broadcast add-config-rule [async call]
     * @param {module:model/CreateRuleRequest} createRuleRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.walletCreateRulePostWithHttpInfo = function(createRuleRequest) {
      var postBody = createRuleRequest;

      // verify the required parameter 'createRuleRequest' is set
      if (createRuleRequest === undefined || createRuleRequest === null) {
        throw new Error("Missing the required parameter 'createRuleRequest' when calling walletCreateRulePost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncTaskCreatedResponse;

      return this.apiClient.callApi(
        '/wallet/create_rule', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create &amp; broadcast add-config-rule [async call]
     * @param {module:model/CreateRuleRequest} createRuleRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.walletCreateRulePost = function(createRuleRequest) {
      return this.walletCreateRulePostWithHttpInfo(createRuleRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create &amp; broadcast delete-config-rule [async call]
     * @param {module:model/DeleteRuleRequest} deleteRuleRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.walletDeleteRulePostWithHttpInfo = function(deleteRuleRequest) {
      var postBody = deleteRuleRequest;

      // verify the required parameter 'deleteRuleRequest' is set
      if (deleteRuleRequest === undefined || deleteRuleRequest === null) {
        throw new Error("Missing the required parameter 'deleteRuleRequest' when calling walletDeleteRulePost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncTaskCreatedResponse;

      return this.apiClient.callApi(
        '/wallet/delete_rule', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create &amp; broadcast delete-config-rule [async call]
     * @param {module:model/DeleteRuleRequest} deleteRuleRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.walletDeleteRulePost = function(deleteRuleRequest) {
      return this.walletDeleteRulePostWithHttpInfo(deleteRuleRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get wallet activity (transactions)
     * @param {module:model/GetActivityRequest} getActivityRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetActivityResponse} and HTTP response
     */
    this.walletGetActivityPostWithHttpInfo = function(getActivityRequest) {
      var postBody = getActivityRequest;

      // verify the required parameter 'getActivityRequest' is set
      if (getActivityRequest === undefined || getActivityRequest === null) {
        throw new Error("Missing the required parameter 'getActivityRequest' when calling walletGetActivityPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetActivityResponse;

      return this.apiClient.callApi(
        '/wallet/get_activity', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get wallet activity (transactions)
     * @param {module:model/GetActivityRequest} getActivityRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetActivityResponse}
     */
    this.walletGetActivityPost = function(getActivityRequest) {
      return this.walletGetActivityPostWithHttpInfo(getActivityRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get wallets balance
     * @param {module:model/GetWalletBalanceRequest} getWalletBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetWalletBalanceResponse} and HTTP response
     */
    this.walletGetBalancesPostWithHttpInfo = function(getWalletBalanceRequest) {
      var postBody = getWalletBalanceRequest;

      // verify the required parameter 'getWalletBalanceRequest' is set
      if (getWalletBalanceRequest === undefined || getWalletBalanceRequest === null) {
        throw new Error("Missing the required parameter 'getWalletBalanceRequest' when calling walletGetBalancesPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetWalletBalanceResponse;

      return this.apiClient.callApi(
        '/wallet/get_balances', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get wallets balance
     * @param {module:model/GetWalletBalanceRequest} getWalletBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetWalletBalanceResponse}
     */
    this.walletGetBalancesPost = function(getWalletBalanceRequest) {
      return this.walletGetBalancesPostWithHttpInfo(getWalletBalanceRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a new address from a given diversifier or generate randomly
     * @param {module:model/GetNewAddressRequest} getNewAddressRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNewAddressResponse} and HTTP response
     */
    this.walletGetNewAddressPostWithHttpInfo = function(getNewAddressRequest) {
      var postBody = getNewAddressRequest;

      // verify the required parameter 'getNewAddressRequest' is set
      if (getNewAddressRequest === undefined || getNewAddressRequest === null) {
        throw new Error("Missing the required parameter 'getNewAddressRequest' when calling walletGetNewAddressPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetNewAddressResponse;

      return this.apiClient.callApi(
        '/wallet/get_new_address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a new address from a given diversifier or generate randomly
     * @param {module:model/GetNewAddressRequest} getNewAddressRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNewAddressResponse}
     */
    this.walletGetNewAddressPost = function(getNewAddressRequest) {
      return this.walletGetNewAddressPostWithHttpInfo(getNewAddressRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get wallet public key
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPublicKeyResponse} and HTTP response
     */
    this.walletGetPublicKeyPostWithHttpInfo = function(getPublicKeyRequest) {
      var postBody = getPublicKeyRequest;

      // verify the required parameter 'getPublicKeyRequest' is set
      if (getPublicKeyRequest === undefined || getPublicKeyRequest === null) {
        throw new Error("Missing the required parameter 'getPublicKeyRequest' when calling walletGetPublicKeyPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetPublicKeyResponse;

      return this.apiClient.callApi(
        '/wallet/get_public_key', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get wallet public key
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPublicKeyResponse}
     */
    this.walletGetPublicKeyPost = function(getPublicKeyRequest) {
      return this.walletGetPublicKeyPostWithHttpInfo(getPublicKeyRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Issue assets [async call]
     * @param {module:model/IssueAssetRequest} issueAssetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.walletIssueAssetPostWithHttpInfo = function(issueAssetRequest) {
      var postBody = issueAssetRequest;

      // verify the required parameter 'issueAssetRequest' is set
      if (issueAssetRequest === undefined || issueAssetRequest === null) {
        throw new Error("Missing the required parameter 'issueAssetRequest' when calling walletIssueAssetPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncTaskCreatedResponse;

      return this.apiClient.callApi(
        '/wallet/issue_asset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Issue assets [async call]
     * @param {module:model/IssueAssetRequest} issueAssetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.walletIssueAssetPost = function(issueAssetRequest) {
      return this.walletIssueAssetPostWithHttpInfo(issueAssetRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer assets [async call]
     * @param {module:model/TransferAssetRequest} transferAssetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.walletTransferAssetPostWithHttpInfo = function(transferAssetRequest) {
      var postBody = transferAssetRequest;

      // verify the required parameter 'transferAssetRequest' is set
      if (transferAssetRequest === undefined || transferAssetRequest === null) {
        throw new Error("Missing the required parameter 'transferAssetRequest' when calling walletTransferAssetPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncTaskCreatedResponse;

      return this.apiClient.callApi(
        '/wallet/transfer_asset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transfer assets [async call]
     * @param {module:model/TransferAssetRequest} transferAssetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.walletTransferAssetPost = function(transferAssetRequest) {
      return this.walletTransferAssetPostWithHttpInfo(transferAssetRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
