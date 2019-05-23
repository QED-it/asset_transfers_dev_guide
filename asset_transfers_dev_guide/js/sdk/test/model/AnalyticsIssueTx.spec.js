/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.3
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
    instance = new QedItAssetTransfers.AnalyticsIssueTx();
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

  describe('AnalyticsIssueTx', function() {
    it('should create an instance of AnalyticsIssueTx', function() {
      // uncomment below and update the code to test AnalyticsIssueTx
      //var instance = new QedItAssetTransfers.AnalyticsIssueTx();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticsIssueTx);
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instance = new QedItAssetTransfers.AnalyticsIssueTx();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "public_key")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new QedItAssetTransfers.AnalyticsIssueTx();
      //expect(instance).to.be();
    });

  });

}));
