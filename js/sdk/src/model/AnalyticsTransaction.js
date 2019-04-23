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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsTransaction = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsTransaction model module.
   * @module model/AnalyticsTransaction
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>AnalyticsTransaction</code>.
   * @alias module:model/AnalyticsTransaction
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsTransaction} obj Optional instance to populate.
   * @return {module:model/AnalyticsTransaction} The populated <code>AnalyticsTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('tx_hash')) {
        obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
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
      if (data.hasOwnProperty('block_height')) {
        obj['block_height'] = ApiClient.convertToType(data['block_height'], 'Number');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} tx_hash
   */
  exports.prototype['tx_hash'] = undefined;
  /**
   * @member {String} block_hash
   */
  exports.prototype['block_hash'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {Number} index_in_block
   */
  exports.prototype['index_in_block'] = undefined;
  /**
   * @member {Number} block_height
   */
  exports.prototype['block_height'] = undefined;
  /**
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


