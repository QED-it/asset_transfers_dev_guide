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
    root.QedItAssetTransfers.ExportWalletResponse = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ExportWalletResponse model module.
   * @module model/ExportWalletResponse
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>ExportWalletResponse</code>.
   * @alias module:model/ExportWalletResponse
   * @class
   * @param walletId {String} The ID of the exported Wallet in the Node from which it was exported
   * @param encryptedSk {String} The encrypted secret key of the Wallet
   * @param salt {String} The salt used in the encryption of the secret key
   */
  var exports = function(walletId, encryptedSk, salt) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['encrypted_sk'] = encryptedSk;
    _this['salt'] = salt;
  };

  /**
   * Constructs a <code>ExportWalletResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportWalletResponse} obj Optional instance to populate.
   * @return {module:model/ExportWalletResponse} The populated <code>ExportWalletResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('wallet_id')) {
        obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
      }
      if (data.hasOwnProperty('encrypted_sk')) {
        obj['encrypted_sk'] = ApiClient.convertToType(data['encrypted_sk'], 'String');
      }
      if (data.hasOwnProperty('salt')) {
        obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
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
   * The encrypted secret key of the Wallet
   * @member {String} encrypted_sk
   */
  exports.prototype['encrypted_sk'] = undefined;
  /**
   * The salt used in the encryption of the secret key
   * @member {String} salt
   */
  exports.prototype['salt'] = undefined;



  return exports;
}));


