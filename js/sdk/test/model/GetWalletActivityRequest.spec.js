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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QedItAssetTransfers);
  }
}(this, function(expect, QedItAssetTransfers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QedItAssetTransfers.GetWalletActivityRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetWalletActivityRequest', function() {
    it('should create an instance of GetWalletActivityRequest', function() {
      // uncomment below and update the code to test GetWalletActivityRequest
      //var instance = new QedItAssetTransfers.GetWalletActivityRequest();
      //expect(instance).to.be.a(QedItAssetTransfers.GetWalletActivityRequest);
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new QedItAssetTransfers.GetWalletActivityRequest();
      //expect(instance).to.be();
    });

    it('should have the property startIndex (base name: "start_index")', function() {
      // uncomment below and update the code to test the property startIndex
      //var instance = new QedItAssetTransfers.GetWalletActivityRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberOfResults (base name: "number_of_results")', function() {
      // uncomment below and update the code to test the property numberOfResults
      //var instance = new QedItAssetTransfers.GetWalletActivityRequest();
      //expect(instance).to.be();
    });

  });

}));
