/**
 * QEDIT – Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.3
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
    root.QedItAssetTransfers.AnalyticsContent = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsContent model module.
   * @module model/AnalyticsContent
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>AnalyticsContent</code>.
   * @alias module:model/AnalyticsContent
   * @class
   * @param txType {String} 
   */
  var exports = function(txType) {
    var _this = this;

    _this['tx_type'] = txType;
  };

  /**
   * Constructs a <code>AnalyticsContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsContent} obj Optional instance to populate.
   * @return {module:model/AnalyticsContent} The populated <code>AnalyticsContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tx_type')) {
        obj['tx_type'] = ApiClient.convertToType(data['tx_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} tx_type
   */
  exports.prototype['tx_type'] = undefined;



  return exports;
}));


