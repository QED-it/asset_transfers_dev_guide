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
    root.QedItAssetTransfers.GetBlocksRequest = factory(root.QedItAssetTransfers.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetBlocksRequest model module.
   * @module model/GetBlocksRequest
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetBlocksRequest</code>.
   * @alias module:model/GetBlocksRequest
   * @class
   * @param startIndex {Number} 
   * @param numberOfResults {Number} 
   */
  var exports = function(startIndex, numberOfResults) {
    var _this = this;

    _this['start_index'] = startIndex;
    _this['number_of_results'] = numberOfResults;
  };

  /**
   * Constructs a <code>GetBlocksRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlocksRequest} obj Optional instance to populate.
   * @return {module:model/GetBlocksRequest} The populated <code>GetBlocksRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('start_index')) {
        obj['start_index'] = ApiClient.convertToType(data['start_index'], 'Number');
      }
      if (data.hasOwnProperty('number_of_results')) {
        obj['number_of_results'] = ApiClient.convertToType(data['number_of_results'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} start_index
   */
  exports.prototype['start_index'] = undefined;
  /**
   * @member {Number} number_of_results
   */
  exports.prototype['number_of_results'] = undefined;



  return exports;
}));


