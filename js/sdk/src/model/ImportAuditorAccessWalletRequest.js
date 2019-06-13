/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.4.0
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
    root.QedItAssetTransfers.ImportAuditorAccessWalletRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ImportAuditorAccessWalletRequest model module.
   * @module model/ImportAuditorAccessWalletRequest
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ImportAuditorAccessWalletRequest</code>.
   * @alias module:model/ImportAuditorAccessWalletRequest
   * @class
   * @param walletId {String} 
   * @param publicKey {String} 
   * @param accessKey {String} 
   */
  var exports = function(walletId, publicKey, accessKey) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['public_key'] = publicKey;
    _this['access_key'] = accessKey;
  };

  /**
   * Constructs a <code>ImportAuditorAccessWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportAuditorAccessWalletRequest} obj Optional instance to populate.
   * @return {module:model/ImportAuditorAccessWalletRequest} The populated <code>ImportAuditorAccessWalletRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('public_key')) {
        obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
      }
      if (data.hasOwnProperty('access_key')) {
        obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * @member {String} public_key
   */
  exports.prototype['public_key'] = undefined;
  /**
   * @member {String} access_key
   */
  exports.prototype['access_key'] = undefined;



  return exports;
}));


