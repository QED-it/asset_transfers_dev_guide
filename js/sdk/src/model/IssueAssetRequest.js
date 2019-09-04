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
    root.QedItAssetTransfers.IssueAssetRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The IssueAssetRequest model module.
   * @module model/IssueAssetRequest
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>IssueAssetRequest</code>.
   * @alias module:model/IssueAssetRequest
   * @class
   * @param walletId {String} The ID of the Wallet that has the required Issuance privileges
   * @param authorization {String} The authorization password for the Wallet that has the Issuance privileges
   * @param recipientAddress {String} The Address of the recipient of the issued Assets
   * @param assetId {Number} The ID of the Asset Type to issue
   * @param amount {Number} the amount of Assets to issue
   * @param confidential {Boolean} Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public
   * @param memo {String} 
   */
  var exports = function(walletId, authorization, recipientAddress, assetId, amount, confidential, memo) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['authorization'] = authorization;
    _this['recipient_address'] = recipientAddress;
    _this['asset_id'] = assetId;
    _this['amount'] = amount;
    _this['confidential'] = confidential;
    _this['memo'] = memo;
  };

  /**
   * Constructs a <code>IssueAssetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueAssetRequest} obj Optional instance to populate.
   * @return {module:model/IssueAssetRequest} The populated <code>IssueAssetRequest</code> instance.
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
      if (data.hasOwnProperty('recipient_address')) {
        obj['recipient_address'] = ApiClient.convertToType(data['recipient_address'], 'String');
      }
      if (data.hasOwnProperty('asset_id')) {
        obj['asset_id'] = ApiClient.convertToType(data['asset_id'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('confidential')) {
        obj['confidential'] = ApiClient.convertToType(data['confidential'], 'Boolean');
      }
      if (data.hasOwnProperty('memo')) {
        obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the Wallet that has the required Issuance privileges
   * @member {String} wallet_id
   */
  exports.prototype['wallet_id'] = undefined;
  /**
   * The authorization password for the Wallet that has the Issuance privileges
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * The Address of the recipient of the issued Assets
   * @member {String} recipient_address
   */
  exports.prototype['recipient_address'] = undefined;
  /**
   * The ID of the Asset Type to issue
   * @member {Number} asset_id
   */
  exports.prototype['asset_id'] = undefined;
  /**
   * the amount of Assets to issue
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Boolean which should be true if the issuance should be confidential, and false of the Issuance should be public
   * @member {Boolean} confidential
   */
  exports.prototype['confidential'] = undefined;
  /**
   * @member {String} memo
   */
  exports.prototype['memo'] = undefined;



  return exports;
}));


