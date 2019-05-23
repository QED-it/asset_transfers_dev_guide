/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/AnalyticTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.GetNetworkActivityResponse = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticTransaction);
  }
}(this, function(ApiClient, AnalyticTransaction) {
  'use strict';



  /**
   * The GetNetworkActivityResponse model module.
   * @module model/GetNetworkActivityResponse
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>GetNetworkActivityResponse</code>.
   * @alias module:model/GetNetworkActivityResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetNetworkActivityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetNetworkActivityResponse} obj Optional instance to populate.
   * @return {module:model/GetNetworkActivityResponse} The populated <code>GetNetworkActivityResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [AnalyticTransaction]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AnalyticTransaction>} transactions
   */
  exports.prototype['transactions'] = undefined;



  return exports;
}));


