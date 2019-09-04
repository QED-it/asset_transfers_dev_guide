/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.5.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetWalletActivityRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetWalletActivityRequest model module.
   * @module model/GetWalletActivityRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GetWalletActivityRequest</code>.
   * @alias module:model/GetWalletActivityRequest
   * @class
   * @param walletId {String} The ID of the Wallet for which to retrieve activity history
   * @param startIndex {Number} An offset used to paginate through the activity history; indexing is 0-based
   * @param numberOfResults {Number} Maximal number of results to fetch in this call
   */
  var exports = function(walletId, startIndex, numberOfResults) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['start_index'] = startIndex;
    _this['number_of_results'] = numberOfResults;
  };

  /**
   * Constructs a <code>GetWalletActivityRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWalletActivityRequest} obj Optional instance to populate.
   * @return {module:model/GetWalletActivityRequest} The populated <code>GetWalletActivityRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('start_index')) {
        obj['start_index'] = ApiClient.convertToType(data['start_index'], 'Number');
      }
      if (data.hasOwnProperty('number_of_results')) {
        obj['number_of_results'] = ApiClient.convertToType(data['number_of_results'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ID of the Wallet for which to retrieve activity history
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * An offset used to paginate through the activity history; indexing is 0-based
   * @member {Number} start_index
   */
  exports.prototype['start_index'] = undefined;
  /**
   * Maximal number of results to fetch in this call
   * @member {Number} number_of_results
   */
  exports.prototype['number_of_results'] = undefined;



  return exports;
}));


