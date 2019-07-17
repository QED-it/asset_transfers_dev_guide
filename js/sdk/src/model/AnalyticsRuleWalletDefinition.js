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
    root.QedItAssetTransfers.AnalyticsRuleWalletDefinition = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsRuleWalletDefinition model module.
   * @module model/AnalyticsRuleWalletDefinition
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AnalyticsRuleWalletDefinition</code>.
   * @alias module:model/AnalyticsRuleWalletDefinition
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsRuleWalletDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsRuleWalletDefinition} obj Optional instance to populate.
   * @return {module:model/AnalyticsRuleWalletDefinition} The populated <code>AnalyticsRuleWalletDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('public_key')) {
        obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
      }
      if (data.hasOwnProperty('can_issue_confidentially')) {
        obj['can_issue_confidentially'] = ApiClient.convertToType(data['can_issue_confidentially'], 'Boolean');
      }
      if (data.hasOwnProperty('is_admin')) {
        obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
      }
      if (data.hasOwnProperty('can_issue_asset_id_first')) {
        obj['can_issue_asset_id_first'] = ApiClient.convertToType(data['can_issue_asset_id_first'], 'Number');
      }
      if (data.hasOwnProperty('can_issue_asset_id_last')) {
        obj['can_issue_asset_id_last'] = ApiClient.convertToType(data['can_issue_asset_id_last'], 'Number');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} public_key
   */
  exports.prototype['public_key'] = undefined;
  /**
   * @member {Boolean} can_issue_confidentially
   */
  exports.prototype['can_issue_confidentially'] = undefined;
  /**
   * @member {Boolean} is_admin
   */
  exports.prototype['is_admin'] = undefined;
  /**
   * @member {Number} can_issue_asset_id_first
   */
  exports.prototype['can_issue_asset_id_first'] = undefined;
  /**
   * @member {Number} can_issue_asset_id_last
   */
  exports.prototype['can_issue_asset_id_last'] = undefined;
  /**
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;



  return exports;
}));

