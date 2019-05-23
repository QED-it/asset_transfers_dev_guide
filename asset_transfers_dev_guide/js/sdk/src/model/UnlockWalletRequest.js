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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.UnlockWalletRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UnlockWalletRequest model module.
   * @module model/UnlockWalletRequest
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>UnlockWalletRequest</code>.
   * @alias module:model/UnlockWalletRequest
   * @class
   * @param walletId {String} 
   * @param authorization {String} 
   * @param seconds {Number} 
   */
  var exports = function(walletId, authorization, seconds) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['authorization'] = authorization;
    _this['seconds'] = seconds;
  };

  /**
   * Constructs a <code>UnlockWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnlockWalletRequest} obj Optional instance to populate.
   * @return {module:model/UnlockWalletRequest} The populated <code>UnlockWalletRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('seconds')) {
        obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * @member {Number} seconds
   */
  exports.prototype['seconds'] = undefined;



  return exports;
}));


