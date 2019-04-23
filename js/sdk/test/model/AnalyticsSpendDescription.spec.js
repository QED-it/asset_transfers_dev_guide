/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.2
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
    instance = new QedItAssetTransfers.AnalyticsSpendDescription();
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

  describe('AnalyticsSpendDescription', function() {
    it('should create an instance of AnalyticsSpendDescription', function() {
      // uncomment below and update the code to test AnalyticsSpendDescription
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticsSpendDescription);
    });

    it('should have the property cv (base name: "cv")', function() {
      // uncomment below and update the code to test the property cv
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

    it('should have the property anchor (base name: "anchor")', function() {
      // uncomment below and update the code to test the property anchor
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

    it('should have the property nullifier (base name: "nullifier")', function() {
      // uncomment below and update the code to test the property nullifier
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

    it('should have the property rkOut (base name: "rk_out")', function() {
      // uncomment below and update the code to test the property rkOut
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

    it('should have the property zkproof (base name: "zkproof")', function() {
      // uncomment below and update the code to test the property zkproof
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

    it('should have the property spendAuthSig (base name: "spend_auth_sig")', function() {
      // uncomment below and update the code to test the property spendAuthSig
      //var instance = new QedItAssetTransfers.AnalyticsSpendDescription();
      //expect(instance).to.be();
    });

  });

}));
