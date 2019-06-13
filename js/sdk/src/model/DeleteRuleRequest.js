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
    define(['ApiClient', 'model/Rule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'));
  } else {
    // Browser globals (root is window)
    if (!root.QedItAssetTransfers) {
      root.QedItAssetTransfers = {};
    }
    root.QedItAssetTransfers.DeleteRuleRequest = factory(root.QedItAssetTransfers.ApiClient, root.QedItAssetTransfers.Rule);
  }
}(this, function(ApiClient, Rule) {
  'use strict';



  /**
   * The DeleteRuleRequest model module.
   * @module model/DeleteRuleRequest
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>DeleteRuleRequest</code>.
   * @alias module:model/DeleteRuleRequest
   * @class
   * @param walletId {String} 
   * @param authorization {String} 
   * @param rulesToDelete {Array.<module:model/Rule>} 
   */
  var exports = function(walletId, authorization, rulesToDelete) {
    var _this = this;

    _this['wallet_id'] = walletId;
    _this['authorization'] = authorization;
    _this['rules_to_delete'] = rulesToDelete;
  };

  /**
   * Constructs a <code>DeleteRuleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteRuleRequest} obj Optional instance to populate.
   * @return {module:model/DeleteRuleRequest} The populated <code>DeleteRuleRequest</code> instance.
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
      if (data.hasOwnProperty('rules_to_delete')) {
        obj['rules_to_delete'] = ApiClient.convertToType(data['rules_to_delete'], [Rule]);
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
   * @member {Array.<module:model/Rule>} rules_to_delete
   */
  exports.prototype['rules_to_delete'] = undefined;



  return exports;
}));


