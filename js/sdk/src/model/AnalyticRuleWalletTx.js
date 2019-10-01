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
    define(['ApiClient', 'model/AnalyticsRuleWalletDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalyticsRuleWalletDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.AnalyticRuleWalletTx = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.AnalyticsRuleWalletDefinition);
  }
}(this, function(ApiClient, AnalyticsRuleWalletDefinition) {
  'use strict';



  /**
   * The AnalyticRuleWalletTx model module.
   * @module model/AnalyticRuleWalletTx
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>AnalyticRuleWalletTx</code>.
   * @alias module:model/AnalyticRuleWalletTx
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticRuleWalletTx</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticRuleWalletTx} obj Optional instance to populate.
   * @return {module:model/AnalyticRuleWalletTx} The populated <code>AnalyticRuleWalletTx</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('signed_by_self')) {
        obj['signed_by_self'] = ApiClient.convertToType(data['signed_by_self'], 'Boolean');
      }
      if (data.hasOwnProperty('rule_affect_self')) {
        obj['rule_affect_self'] = ApiClient.convertToType(data['rule_affect_self'], 'Boolean');
      }
      if (data.hasOwnProperty('tx_signer')) {
        obj['tx_signer'] = ApiClient.convertToType(data['tx_signer'], 'String');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = AnalyticsRuleWalletDefinition.constructFromObject(data['rule']);
      }
    }
    return obj;
  }

  /**
   * Boolean signifying whether the Rule was created by the Wallet in question
   * @member {Boolean} signed_by_self
   */
  exports.prototype['signed_by_self'] = undefined;
  /**
   * Boolean signifying whether the Rule granted permissions to the Wallet in question
   * @member {Boolean} rule_affect_self
   */
  exports.prototype['rule_affect_self'] = undefined;
  /**
   * The public key of the Wallet that was used to create the Rule
   * @member {String} tx_signer
   */
  exports.prototype['tx_signer'] = undefined;
  /**
   * @member {module:model/AnalyticsRuleWalletDefinition} rule
   */
  exports.prototype['rule'] = undefined;



  return exports;
}));


