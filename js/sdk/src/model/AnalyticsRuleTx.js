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
    define(['ApiClient', 'model/AnalyticsRuleDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsRuleDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticsRuleTx = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticsRuleDefinition);
  }
}(this, function(ApiClient, AnalyticsRuleDefinition) {
  'use strict';



  /**
   * The AnalyticsRuleTx model module.
   * @module model/AnalyticsRuleTx
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AnalyticsRuleTx</code>.
   * The data of a particular Rule changing transaction
   * @alias module:model/AnalyticsRuleTx
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsRuleTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsRuleTx} obj Optional instance to populate.
   * @return {module:model/AnalyticsRuleTx} The populated <code>AnalyticsRuleTx</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sender_public_key')) {
        obj['sender_public_key'] = ApiClient.convertToType(data['sender_public_key'], 'String');
      }
      if (data.hasOwnProperty('rules_to_add')) {
        obj['rules_to_add'] = ApiClient.convertToType(data['rules_to_add'], [AnalyticsRuleDefinition]);
      }
      if (data.hasOwnProperty('rules_to_delete')) {
        obj['rules_to_delete'] = ApiClient.convertToType(data['rules_to_delete'], [AnalyticsRuleDefinition]);
      }
      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
      }
      if (data.hasOwnProperty('signature')) {
        obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
      }
    }
    return obj;
  }

  /**
   * The public key of the Wallet used to create the Rule
   * @member {String} sender_public_key
   */
  exports.prototype['sender_public_key'] = undefined;
  /**
   * The details of the Rules added in this transaction
   * @member {Array.<module:model/AnalyticsRuleDefinition>} rules_to_add
   */
  exports.prototype['rules_to_add'] = undefined;
  /**
   * The details of the Rules deleted in this transaction
   * @member {Array.<module:model/AnalyticsRuleDefinition>} rules_to_delete
   */
  exports.prototype['rules_to_delete'] = undefined;
  /**
   * The nonce used to make this Rule transaction unique
   * @member {Number} nonce
   */
  exports.prototype['nonce'] = undefined;
  /**
   * The signature authorizing the Rule changes, made by the Wallet that made the Rule changes
   * @member {String} signature
   */
  exports.prototype['signature'] = undefined;



  return exports;
}));


