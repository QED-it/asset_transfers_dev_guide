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
    instance = new QedItAssetTransfers.AnalyticsOutput();
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

  describe('AnalyticsOutput', function() {
    it('should create an instance of AnalyticsOutput', function() {
      // uncomment below and update the code to test AnalyticsOutput
      //var instance = new QedItAssetTransfers.AnalyticsOutput();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticsOutput);
    });

    it('should have the property isConfidential (base name: "is_confidential")', function() {
      // uncomment below and update the code to test the property isConfidential
      //var instance = new QedItAssetTransfers.AnalyticsOutput();
      //expect(instance).to.be();
    });

    it('should have the property publicIssuanceDescription (base name: "public_issuance_description")', function() {
      // uncomment below and update the code to test the property publicIssuanceDescription
      //var instance = new QedItAssetTransfers.AnalyticsOutput();
      //expect(instance).to.be();
    });

    it('should have the property confidentialIssuanceDescription (base name: "confidential_issuance_description")', function() {
      // uncomment below and update the code to test the property confidentialIssuanceDescription
      //var instance = new QedItAssetTransfers.AnalyticsOutput();
      //expect(instance).to.be();
    });

    it('should have the property outputDescription (base name: "output_description")', function() {
      // uncomment below and update the code to test the property outputDescription
      //var instance = new QedItAssetTransfers.AnalyticsOutput();
      //expect(instance).to.be();
    });

  });

}));
