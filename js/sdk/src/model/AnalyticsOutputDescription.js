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
    root.QedItAssetTransfers.AnalyticsOutputDescription = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AnalyticsOutputDescription model module.
   * @module model/AnalyticsOutputDescription
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>AnalyticsOutputDescription</code>.
   * @alias module:model/AnalyticsOutputDescription
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AnalyticsOutputDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsOutputDescription} obj Optional instance to populate.
   * @return {module:model/AnalyticsOutputDescription} The populated <code>AnalyticsOutputDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cv')) {
        obj['cv'] = ApiClient.convertToType(data['cv'], 'String');
      }
      if (data.hasOwnProperty('cm')) {
        obj['cm'] = ApiClient.convertToType(data['cm'], 'String');
      }
      if (data.hasOwnProperty('epk')) {
        obj['epk'] = ApiClient.convertToType(data['epk'], 'String');
      }
      if (data.hasOwnProperty('zkproof')) {
        obj['zkproof'] = ApiClient.convertToType(data['zkproof'], 'String');
      }
      if (data.hasOwnProperty('enc_note')) {
        obj['enc_note'] = ApiClient.convertToType(data['enc_note'], 'String');
      }
      if (data.hasOwnProperty('enc_sender')) {
        obj['enc_sender'] = ApiClient.convertToType(data['enc_sender'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} cv
   */
  exports.prototype['cv'] = undefined;
  /**
   * @member {String} cm
   */
  exports.prototype['cm'] = undefined;
  /**
   * @member {String} epk
   */
  exports.prototype['epk'] = undefined;
  /**
   * @member {String} zkproof
   */
  exports.prototype['zkproof'] = undefined;
  /**
   * @member {String} enc_note
   */
  exports.prototype['enc_note'] = undefined;
  /**
   * @member {String} enc_sender
   */
  exports.prototype['enc_sender'] = undefined;



  return exports;
}));


