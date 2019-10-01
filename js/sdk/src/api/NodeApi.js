/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.0
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
    define(['ApiClient', 'model/AsyncTaskCreatedResponse', 'model/DeleteWalletRequest', 'model/ErrorResponse', 'model/ExportAuditorAccessWalletRequest', 'model/ExportAuditorAccessWalletResponse', 'model/ExportWalletRequest', 'model/ExportWalletResponse', 'model/GenerateWalletRequest', 'model/GetAllWalletsResponse', 'model/GetRulesResponse', 'model/GetTaskStatusRequest', 'model/GetTaskStatusResponse', 'model/GetTasksRequest', 'model/GetTasksResponse', 'model/ImportAuditorAccessWalletRequest', 'model/ImportWalletRequest', 'model/TaskActionRequest', 'model/UnlockWalletRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncTaskCreatedResponse'), require('../model/DeleteWalletRequest'), require('../model/ErrorResponse'), require('../model/ExportAuditorAccessWalletRequest'), require('../model/ExportAuditorAccessWalletResponse'), require('../model/ExportWalletRequest'), require('../model/ExportWalletResponse'), require('../model/GenerateWalletRequest'), require('../model/GetAllWalletsResponse'), require('../model/GetRulesResponse'), require('../model/GetTaskStatusRequest'), require('../model/GetTaskStatusResponse'), require('../model/GetTasksRequest'), require('../model/GetTasksResponse'), require('../model/ImportAuditorAccessWalletRequest'), require('../model/ImportWalletRequest'), require('../model/TaskActionRequest'), require('../model/UnlockWalletRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.NodeApi = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AsyncTaskCreatedResponse, root.QedItAssetTransfers.DeleteWalletRequest, root.QedItAssetTransfers.ErrorResponse, root.QedItAssetTransfers.ExportAuditorAccessWalletRequest, root.QedItAssetTransfers.ExportAuditorAccessWalletResponse, root.QedItAssetTransfers.ExportWalletRequest, root.QedItAssetTransfers.ExportWalletResponse, root.QedItAssetTransfers.GenerateWalletRequest, root.QedItAssetTransfers.GetAllWalletsResponse, root.QedItAssetTransfers.GetRulesResponse, root.QedItAssetTransfers.GetTaskStatusRequest, root.QedItAssetTransfers.GetTaskStatusResponse, root.QedItAssetTransfers.GetTasksRequest, root.QedItAssetTransfers.GetTasksResponse, root.QedItAssetTransfers.ImportAuditorAccessWalletRequest, root.QedItAssetTransfers.ImportWalletRequest, root.QedItAssetTransfers.TaskActionRequest, root.QedItAssetTransfers.UnlockWalletRequest);
  }
}(this, function(ApiClient, AsyncTaskCreatedResponse, DeleteWalletRequest, ErrorResponse, ExportAuditorAccessWalletRequest, ExportAuditorAccessWalletResponse, ExportWalletRequest, ExportWalletResponse, GenerateWalletRequest, GetAllWalletsResponse, GetRulesResponse, GetTaskStatusRequest, GetTaskStatusResponse, GetTasksRequest, GetTasksResponse, ImportAuditorAccessWalletRequest, ImportWalletRequest, TaskActionRequest, UnlockWalletRequest) {
  'use strict';

  /**
   * Node service.
   * @module api/NodeApi
   * @version 1.6.0
   */

  /**
   * Constructs a new NodeApi. 
   * @alias module:api/NodeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Approve task with pending incoming transaction [async call]
     * Confirmation request tasks are confirmed using this point. After the user confirms the incoming transaction, it is asynchronously sent to the blockchain and its status can be queried like any other async task.
     * @param {module:model/TaskActionRequest} taskActionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.nodeApproveTaskPostWithHttpInfo = function(taskActionRequest) {
      var postBody = taskActionRequest;

      // verify the required parameter 'taskActionRequest' is set
      if (taskActionRequest === undefined || taskActionRequest === null) {
        throw new Error("Missing the required parameter 'taskActionRequest' when calling nodeApproveTaskPost");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/node/approve_task', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Approve task with pending incoming transaction [async call]
     * Confirmation request tasks are confirmed using this point. After the user confirms the incoming transaction, it is asynchronously sent to the blockchain and its status can be queried like any other async task.
     * @param {module:model/TaskActionRequest} taskActionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.nodeApproveTaskPost = function(taskActionRequest) {
      return this.nodeApproveTaskPostWithHttpInfo(taskActionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel task with pending incoming transaction both incoming and outgoing [async call]
     * A user may select to decline an incoming transaction. The related task will change its result to failure both on senders and the receivers side. This endpoint can also be used to cancel an outgoing pending transaction that is awaiting user interaction from the receiver
     * @param {module:model/TaskActionRequest} taskActionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.nodeCancelTaskPostWithHttpInfo = function(taskActionRequest) {
      var postBody = taskActionRequest;

      // verify the required parameter 'taskActionRequest' is set
      if (taskActionRequest === undefined || taskActionRequest === null) {
        throw new Error("Missing the required parameter 'taskActionRequest' when calling nodeCancelTaskPost");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/node/cancel_task', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel task with pending incoming transaction both incoming and outgoing [async call]
     * A user may select to decline an incoming transaction. The related task will change its result to failure both on senders and the receivers side. This endpoint can also be used to cancel an outgoing pending transaction that is awaiting user interaction from the receiver
     * @param {module:model/TaskActionRequest} taskActionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.nodeCancelTaskPost = function(taskActionRequest) {
      return this.nodeCancelTaskPostWithHttpInfo(taskActionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Wallet [async call]
     * Deletes a Wallet from the Node; All private information about the Wallet will be deleted including transactional history, balances, and keys; If the secret key of the Wallet are not stored elsewhere then all Assets held in the Wallet will be forever lost! If the secret key of the Wallet is stored elsewhere, then all held Assets and the entire transactional history of the Wallet can be restored from the Blockchain at any time by importing the Wallet into a Node.
     * @param {module:model/DeleteWalletRequest} deleteWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.nodeDeleteWalletPostWithHttpInfo = function(deleteWalletRequest) {
      var postBody = deleteWalletRequest;

      // verify the required parameter 'deleteWalletRequest' is set
      if (deleteWalletRequest === undefined || deleteWalletRequest === null) {
        throw new Error("Missing the required parameter 'deleteWalletRequest' when calling nodeDeleteWalletPost");
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
        '/node/delete_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Wallet [async call]
     * Deletes a Wallet from the Node; All private information about the Wallet will be deleted including transactional history, balances, and keys; If the secret key of the Wallet are not stored elsewhere then all Assets held in the Wallet will be forever lost! If the secret key of the Wallet is stored elsewhere, then all held Assets and the entire transactional history of the Wallet can be restored from the Blockchain at any time by importing the Wallet into a Node.
     * @param {module:model/DeleteWalletRequest} deleteWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.nodeDeleteWalletPost = function(deleteWalletRequest) {
      return this.nodeDeleteWalletPostWithHttpInfo(deleteWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export viewing credentials for a Wallet
     * Export a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The viewing key is encrypted for a specific Address, and can only be recovered by someone in possession of either a secret key or a viewing key for the Wallet that Address belongs to. The viewing key does enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.
     * @param {module:model/ExportAuditorAccessWalletRequest} exportAuditorAccessWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExportAuditorAccessWalletResponse} and HTTP response
     */
    this.nodeExportAuditorAccessWalletPostWithHttpInfo = function(exportAuditorAccessWalletRequest) {
      var postBody = exportAuditorAccessWalletRequest;

      // verify the required parameter 'exportAuditorAccessWalletRequest' is set
      if (exportAuditorAccessWalletRequest === undefined || exportAuditorAccessWalletRequest === null) {
        throw new Error("Missing the required parameter 'exportAuditorAccessWalletRequest' when calling nodeExportAuditorAccessWalletPost");
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
      var returnType = ExportAuditorAccessWalletResponse;

      return this.apiClient.callApi(
        '/node/export_auditor_access_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export viewing credentials for a Wallet
     * Export a viewing key that allows viewing all transactions to and from a wallet, including past transactions. The viewing key is encrypted for a specific Address, and can only be recovered by someone in possession of either a secret key or a viewing key for the Wallet that Address belongs to. The viewing key does enable making any transactions (including rule changes, issuance, and transfers) on behalf of the exported Wallet.
     * @param {module:model/ExportAuditorAccessWalletRequest} exportAuditorAccessWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExportAuditorAccessWalletResponse}
     */
    this.nodeExportAuditorAccessWalletPost = function(exportAuditorAccessWalletRequest) {
      return this.nodeExportAuditorAccessWalletPostWithHttpInfo(exportAuditorAccessWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export wallet secret key
     * Export an encrypted form of the Wallet&#39;s secret key; The authorization password under which the secret key is encrypted is the same one under which it was originally created or imported; Knowledge of the secret key and the authorization password is required to import the Wallet into a Node in the future.
     * @param {module:model/ExportWalletRequest} exportWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExportWalletResponse} and HTTP response
     */
    this.nodeExportWalletPostWithHttpInfo = function(exportWalletRequest) {
      var postBody = exportWalletRequest;

      // verify the required parameter 'exportWalletRequest' is set
      if (exportWalletRequest === undefined || exportWalletRequest === null) {
        throw new Error("Missing the required parameter 'exportWalletRequest' when calling nodeExportWalletPost");
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
      var returnType = ExportWalletResponse;

      return this.apiClient.callApi(
        '/node/export_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export wallet secret key
     * Export an encrypted form of the Wallet&#39;s secret key; The authorization password under which the secret key is encrypted is the same one under which it was originally created or imported; Knowledge of the secret key and the authorization password is required to import the Wallet into a Node in the future.
     * @param {module:model/ExportWalletRequest} exportWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExportWalletResponse}
     */
    this.nodeExportWalletPost = function(exportWalletRequest) {
      return this.nodeExportWalletPostWithHttpInfo(exportWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate a new Wallet
     * Randomly generate a new Wallet under a specified ID; This only affects the Node and in particular nothing about this action is broadcast to the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.
     * @param {module:model/GenerateWalletRequest} generateWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.nodeGenerateWalletPostWithHttpInfo = function(generateWalletRequest) {
      var postBody = generateWalletRequest;

      // verify the required parameter 'generateWalletRequest' is set
      if (generateWalletRequest === undefined || generateWalletRequest === null) {
        throw new Error("Missing the required parameter 'generateWalletRequest' when calling nodeGenerateWalletPost");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/node/generate_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Generate a new Wallet
     * Randomly generate a new Wallet under a specified ID; This only affects the Node and in particular nothing about this action is broadcast to the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.
     * @param {module:model/GenerateWalletRequest} generateWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.nodeGenerateWalletPost = function(generateWalletRequest) {
      return this.nodeGenerateWalletPostWithHttpInfo(generateWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all wallet IDs
     * Returns a list of the IDs of all Wallets currently stored on the Node. Both full-access and view-only Wallets are listed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllWalletsResponse} and HTTP response
     */
    this.nodeGetAllWalletsPostWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetAllWalletsResponse;

      return this.apiClient.callApi(
        '/node/get_all_wallets', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all wallet IDs
     * Returns a list of the IDs of all Wallets currently stored on the Node. Both full-access and view-only Wallets are listed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllWalletsResponse}
     */
    this.nodeGetAllWalletsPost = function() {
      return this.nodeGetAllWalletsPostWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get network governance Rules
     * Returns a full list of all the Rules that govern admin and issuance rights within the network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRulesResponse} and HTTP response
     */
    this.nodeGetRulesPostWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetRulesResponse;

      return this.apiClient.callApi(
        '/node/get_rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get network governance Rules
     * Returns a full list of all the Rules that govern admin and issuance rights within the network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRulesResponse}
     */
    this.nodeGetRulesPost = function() {
      return this.nodeGetRulesPostWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a specific task (by ID)
     * Returns the meta-data of a given Task and its current status. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned.
     * @param {module:model/GetTaskStatusRequest} getTaskStatusRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTaskStatusResponse} and HTTP response
     */
    this.nodeGetTaskStatusPostWithHttpInfo = function(getTaskStatusRequest) {
      var postBody = getTaskStatusRequest;

      // verify the required parameter 'getTaskStatusRequest' is set
      if (getTaskStatusRequest === undefined || getTaskStatusRequest === null) {
        throw new Error("Missing the required parameter 'getTaskStatusRequest' when calling nodeGetTaskStatusPost");
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
      var returnType = GetTaskStatusResponse;

      return this.apiClient.callApi(
        '/node/get_task_status', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a specific task (by ID)
     * Returns the meta-data of a given Task and its current status. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned.
     * @param {module:model/GetTaskStatusRequest} getTaskStatusRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTaskStatusResponse}
     */
    this.nodeGetTaskStatusPost = function(getTaskStatusRequest) {
      return this.nodeGetTaskStatusPostWithHttpInfo(getTaskStatusRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a (potentially) filtered list of all Tasks
     * Returns a list of all Tasks along with their meta-data and statuses. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned. Tasks can be filtered using various parameters as specified in the request body.
     * @param {module:model/GetTasksRequest} getTasksRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTasksResponse} and HTTP response
     */
    this.nodeGetTasksPostWithHttpInfo = function(getTasksRequest) {
      var postBody = getTasksRequest;

      // verify the required parameter 'getTasksRequest' is set
      if (getTasksRequest === undefined || getTasksRequest === null) {
        throw new Error("Missing the required parameter 'getTasksRequest' when calling nodeGetTasksPost");
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
      var returnType = GetTasksResponse;

      return this.apiClient.callApi(
        '/node/get_tasks', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a (potentially) filtered list of all Tasks
     * Returns a list of all Tasks along with their meta-data and statuses. The particular, private details of the Task such as an Asset ID or amount in a Transfer are not returned. Tasks can be filtered using various parameters as specified in the request body.
     * @param {module:model/GetTasksRequest} getTasksRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTasksResponse}
     */
    this.nodeGetTasksPost = function(getTasksRequest) {
      return this.nodeGetTasksPostWithHttpInfo(getTasksRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import viewing credentials for a Wallet [async call]
     * Import a viewing key generated by the export_auditor_access_wallet endpoint. This will create a read-only wallet which can be queried with endpoints such as get_activity and get_balances, but cannot be used to perform transactions. The Wallet whose Address was used as the recipient for the exported viewing key must already be imported within the Node in order for this process to succeed.
     * @param {module:model/ImportAuditorAccessWalletRequest} importAuditorAccessWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.nodeImportAuditorAccessWalletPostWithHttpInfo = function(importAuditorAccessWalletRequest) {
      var postBody = importAuditorAccessWalletRequest;

      // verify the required parameter 'importAuditorAccessWalletRequest' is set
      if (importAuditorAccessWalletRequest === undefined || importAuditorAccessWalletRequest === null) {
        throw new Error("Missing the required parameter 'importAuditorAccessWalletRequest' when calling nodeImportAuditorAccessWalletPost");
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
        '/node/import_auditor_access_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Import viewing credentials for a Wallet [async call]
     * Import a viewing key generated by the export_auditor_access_wallet endpoint. This will create a read-only wallet which can be queried with endpoints such as get_activity and get_balances, but cannot be used to perform transactions. The Wallet whose Address was used as the recipient for the exported viewing key must already be imported within the Node in order for this process to succeed.
     * @param {module:model/ImportAuditorAccessWalletRequest} importAuditorAccessWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.nodeImportAuditorAccessWalletPost = function(importAuditorAccessWalletRequest) {
      return this.nodeImportAuditorAccessWalletPostWithHttpInfo(importAuditorAccessWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import Wallet from a known secret key and authorization [async call]
     * Import a Wallet into the Node under a specified ID; All the transactional history and outstanding balanced of the Wallet will be extracted from the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.
     * @param {module:model/ImportWalletRequest} importWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.nodeImportWalletPostWithHttpInfo = function(importWalletRequest) {
      var postBody = importWalletRequest;

      // verify the required parameter 'importWalletRequest' is set
      if (importWalletRequest === undefined || importWalletRequest === null) {
        throw new Error("Missing the required parameter 'importWalletRequest' when calling nodeImportWalletPost");
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
        '/node/import_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Import Wallet from a known secret key and authorization [async call]
     * Import a Wallet into the Node under a specified ID; All the transactional history and outstanding balanced of the Wallet will be extracted from the Blockchain; The Wallet ID is required to be unique within the Node, but can otherwise be user-defined.
     * @param {module:model/ImportWalletRequest} importWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.nodeImportWalletPost = function(importWalletRequest) {
      return this.nodeImportWalletPostWithHttpInfo(importWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unlocks a wallet for a given amount of seconds [async call]
     * Causes a specified Wallet&#39;s secret key to be stored in-memory for a specified amount of time in order to increase transactional latency. Should only be used in cases where latency is highly sensitive.
     * @param {module:model/UnlockWalletRequest} unlockWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AsyncTaskCreatedResponse} and HTTP response
     */
    this.nodeUnlockWalletPostWithHttpInfo = function(unlockWalletRequest) {
      var postBody = unlockWalletRequest;

      // verify the required parameter 'unlockWalletRequest' is set
      if (unlockWalletRequest === undefined || unlockWalletRequest === null) {
        throw new Error("Missing the required parameter 'unlockWalletRequest' when calling nodeUnlockWalletPost");
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
        '/node/unlock_wallet', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unlocks a wallet for a given amount of seconds [async call]
     * Causes a specified Wallet&#39;s secret key to be stored in-memory for a specified amount of time in order to increase transactional latency. Should only be used in cases where latency is highly sensitive.
     * @param {module:model/UnlockWalletRequest} unlockWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AsyncTaskCreatedResponse}
     */
    this.nodeUnlockWalletPost = function(unlockWalletRequest) {
      return this.nodeUnlockWalletPostWithHttpInfo(unlockWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
