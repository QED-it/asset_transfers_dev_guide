/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.0
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
    root.QedItAssetTransfers.BalanceForAsset = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BalanceForAsset model module.
   * @module model/BalanceForAsset
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>BalanceForAsset</code>.
   * @alias module:model/BalanceForAsset
   * @class
   * @param assetId {Number} 
   * @param amount {Number} 
   */
  var exports = function(assetId, amount) {
    var _this = this;

    _this['asset_id'] = assetId;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>BalanceForAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceForAsset} obj Optional instance to populate.
   * @return {module:model/BalanceForAsset} The populated <code>BalanceForAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


