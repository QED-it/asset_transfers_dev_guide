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
    define(['ApiClient', 'model/AnalyticsTxType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsTxType'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsTxMetadata = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticsTxType);
  }
}(this, function(ApiClient, AnalyticsTxType) {
  'use strict';



  /**
   * The AnalyticsTxMetadata model module.
   * @module model/AnalyticsTxMetadata
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>AnalyticsTxMetadata</code>.
   * @alias module:model/AnalyticsTxMetadata
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsTxMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsTxMetadata} obj Optional instance to populate.
   * @return {module:model/AnalyticsTxMetadata} The populated <code>AnalyticsTxMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = AnalyticsTxType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('tx_hash')) {
        obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
      }
      if (data.hasOwnProperty('block_height')) {
        obj['block_height'] = ApiClient.convertToType(data['block_height'], 'Number');
      }
      if (data.hasOwnProperty('block_hash')) {
        obj['block_hash'] = ApiClient.convertToType(data['block_hash'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('index_in_block')) {
        obj['index_in_block'] = ApiClient.convertToType(data['index_in_block'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AnalyticsTxType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * the QEDIT-generated hash of the transaction
   * @member {String} tx_hash
   */
  exports.prototype['tx_hash'] = undefined;
  /**
   * The height of the Block (inside the Blockchain) that the transaction is a part of
   * @member {Number} block_height
   */
  exports.prototype['block_height'] = undefined;
  /**
   * the hash of the Block (inside the Blockchain) that the transaction is a part of
   * @member {String} block_hash
   */
  exports.prototype['block_hash'] = undefined;
  /**
   * UTC time of creation of the time the Block containing the transaction was created in RFC-3339 format
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The serial number within the Block of the transaction relative to other QEDIT transactions; indexing is 0-based
   * @member {Number} index_in_block
   */
  exports.prototype['index_in_block'] = undefined;



  return exports;
}));


