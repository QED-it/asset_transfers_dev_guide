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
    root.QedItAssetTransfers.GetWalletBalanceRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetWalletBalanceRequest model module.
   * @module model/GetWalletBalanceRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetWalletBalanceRequest</code>.
   * @alias module:model/GetWalletBalanceRequest
   * @class
   * @param walletLabel {String} 
   */
  var exports = function(walletLabel) {
    var _this = this;

    _this['wallet_label'] = walletLabel;
  };

  /**
   * Constructs a <code>GetWalletBalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWalletBalanceRequest} obj Optional instance to populate.
   * @return {module:model/GetWalletBalanceRequest} The populated <code>GetWalletBalanceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_label')) {
        obj['wallet_label'] = ApiClient.convertToType(data['wallet_label'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_label
   */
  exports.prototype['wallet_label'] = undefined;



  return exports;
}));


