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
    define(['ApiClient', 'model/AnalyticWalletMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticWalletMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticWalletTx = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticWalletMetadata);
  }
}(this, function(ApiClient, AnalyticWalletMetadata) {
  'use strict';



  /**
   * The AnalyticWalletTx model module.
   * @module model/AnalyticWalletTx
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>AnalyticWalletTx</code>.
   * A single retrieved transaction
   * @alias module:model/AnalyticWalletTx
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticWalletTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticWalletTx} obj Optional instance to populate.
   * @return {module:model/AnalyticWalletTx} The populated <code>AnalyticWalletTx</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = AnalyticWalletMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AnalyticWalletMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * The detailed information of the transaction; structure depends on the type of transaction
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


