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
    define(['ApiClient', 'model/AnalyticsAssetConverterProofDescription', 'model/AnalyticsOutputDescription', 'model/AnalyticsSpendDescription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsAssetConverterProofDescription'), require('./AnalyticsOutputDescription'), require('./AnalyticsSpendDescription'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsTransferTx = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticsAssetConverterProofDescription, root.QedItAssetTransfers.AnalyticsOutputDescription, root.QedItAssetTransfers.AnalyticsSpendDescription);
  }
}(this, function(ApiClient, AnalyticsAssetConverterProofDescription, AnalyticsOutputDescription, AnalyticsSpendDescription) {
  'use strict';



  /**
   * The AnalyticsTransferTx model module.
   * @module model/AnalyticsTransferTx
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AnalyticsTransferTx</code>.
   * The data of a single Transfer within a Transfer transaction
   * @alias module:model/AnalyticsTransferTx
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsTransferTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsTransferTx} obj Optional instance to populate.
   * @return {module:model/AnalyticsTransferTx} The populated <code>AnalyticsTransferTx</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('asset_converter_descriptions')) {
        obj['asset_converter_descriptions'] = ApiClient.convertToType(data['asset_converter_descriptions'], [AnalyticsAssetConverterProofDescription]);
      }
      if (data.hasOwnProperty('spends')) {
        obj['spends'] = ApiClient.convertToType(data['spends'], [AnalyticsSpendDescription]);
      }
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], [AnalyticsOutputDescription]);
      }
      if (data.hasOwnProperty('rk')) {
        obj['rk'] = ApiClient.convertToType(data['rk'], 'String');
      }
      if (data.hasOwnProperty('spend_auth_sig')) {
        obj['spend_auth_sig'] = ApiClient.convertToType(data['spend_auth_sig'], 'String');
      }
      if (data.hasOwnProperty('binding_sig')) {
        obj['binding_sig'] = ApiClient.convertToType(data['binding_sig'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Converter Proofs
   * @member {Array.<module:model/AnalyticsAssetConverterProofDescription>} asset_converter_descriptions
   */
  exports.prototype['asset_converter_descriptions'] = undefined;
  /**
   * The information and Proofs associated with the Assets spent in the Transfer
   * @member {Array.<module:model/AnalyticsSpendDescription>} spends
   */
  exports.prototype['spends'] = undefined;
  /**
   * The information and Proofs associated with the Assets output from the Transfer
   * @member {Array.<module:model/AnalyticsOutputDescription>} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * The re-randomized public key of the Wallet which created the Transfer
   * @member {String} rk
   */
  exports.prototype['rk'] = undefined;
  /**
   * The signature authorizing the spend of the Assets spent in the Transfer
   * @member {String} spend_auth_sig
   */
  exports.prototype['spend_auth_sig'] = undefined;
  /**
   * The signature binding the spent and output Assets and verifying the balance
   * @member {String} binding_sig
   */
  exports.prototype['binding_sig'] = undefined;



  return exports;
}));


