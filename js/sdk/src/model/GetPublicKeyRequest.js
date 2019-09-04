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
    root.QedItAssetTransfers.GetPublicKeyRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetPublicKeyRequest model module.
   * @module model/GetPublicKeyRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>GetPublicKeyRequest</code>.
   * @alias module:model/GetPublicKeyRequest
   * @class
   * @param walletId {String} The ID of the Wallet for which to retrieve the public key
   */
  var exports = function(walletId) {
    var _this = this;

    _this['wallet_id'] = walletId;
  };

  /**
   * Constructs a <code>GetPublicKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetPublicKeyRequest} obj Optional instance to populate.
   * @return {module:model/GetPublicKeyRequest} The populated <code>GetPublicKeyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the Wallet for which to retrieve the public key
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;



  return exports;
}));


