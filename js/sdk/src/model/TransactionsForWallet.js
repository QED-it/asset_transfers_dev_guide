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
    root.QedItAssetTransfers.TransactionsForWallet = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TransactionsForWallet model module.
   * @module model/TransactionsForWallet
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>TransactionsForWallet</code>.
   * @alias module:model/TransactionsForWallet
   * @class
   * @param isIncoming {Boolean} 
   * @param assetId {Number} 
   * @param amount {Number} 
   * @param recipientAddress {String} 
   * @param memo {String} 
   * @param id {String} 
   */
  var exports = function(isIncoming, assetId, amount, recipientAddress, memo, id) {
    var _this = this;

    _this['is_incoming'] = isIncoming;
    _this['asset_id'] = assetId;
    _this['amount'] = amount;
    _this['recipient_address'] = recipientAddress;
    _this['memo'] = memo;
    _this['id'] = id;
  };

  /**
   * Constructs a <code>TransactionsForWallet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionsForWallet} obj Optional instance to populate.
   * @return {module:model/TransactionsForWallet} The populated <code>TransactionsForWallet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('is_incoming')) {
        obj['is_incoming'] = ApiClient.convertToType(data['is_incoming'], 'Boolean');
      }
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('recipient_address')) {
        obj['recipient_address'] = ApiClient.convertToType(data['recipient_address'], 'String');
      }
      if (data.hasOwnProperty('memo')) {
        obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} is_incoming
   */
  exports.prototype['is_incoming'] = undefined;
  /**
   * @member {Number} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} recipient_address
   */
  exports.prototype['recipient_address'] = undefined;
  /**
   * @member {String} memo
   */
  exports.prototype['memo'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


