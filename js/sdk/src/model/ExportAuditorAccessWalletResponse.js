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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.ExportAuditorAccessWalletResponse = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ExportAuditorAccessWalletResponse model module.
   * @module model/ExportAuditorAccessWalletResponse
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>ExportAuditorAccessWalletResponse</code>.
   * @alias module:model/ExportAuditorAccessWalletResponse
   * @class
   * @param walletId {String} The ID of the exported Wallet in the Node from which it was exported
   * @param publicKey {String} The public key of the exported Wallet which uniquely identifies it across the network
   * @param accessKey {String} The encrypted viewing key
   */
  var exports = function(walletId, publicKey, accessKey) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['public_key'] = publicKey;
    _this['access_key'] = accessKey;
  };

  /**
   * Constructs a <code>ExportAuditorAccessWalletResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportAuditorAccessWalletResponse} obj Optional instance to populate.
   * @return {module:model/ExportAuditorAccessWalletResponse} The populated <code>ExportAuditorAccessWalletResponse</code> instance.
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
   * The ID of the exported Wallet in the Node from which it was exported
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * The public key of the exported Wallet which uniquely identifies it across the network
   * @member {String} public_key
   */
  exports.prototype['public_key'] = undefined;
  /**
   * The encrypted viewing key
   * @member {String} access_key
   */
  exports.prototype['access_key'] = undefined;



  return exports;
}));


