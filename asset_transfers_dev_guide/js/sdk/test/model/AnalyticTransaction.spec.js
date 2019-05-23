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
    instance = new QedItAssetTransfers.AnalyticTransaction();
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

  describe('AnalyticTransaction', function() {
    it('should create an instance of AnalyticTransaction', function() {
      // uncomment below and update the code to test AnalyticTransaction
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticTransaction);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property txHash (base name: "tx_hash")', function() {
      // uncomment below and update the code to test the property txHash
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property blockHash (base name: "block_hash")', function() {
      // uncomment below and update the code to test the property blockHash
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property indexInBlock (base name: "index_in_block")', function() {
      // uncomment below and update the code to test the property indexInBlock
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property blockHeight (base name: "block_height")', function() {
      // uncomment below and update the code to test the property blockHeight
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new QedItAssetTransfers.AnalyticTransaction();
      //expect(instance).to.be();
    });

  });

}));
