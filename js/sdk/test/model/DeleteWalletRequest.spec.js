/**
 * QED-it - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
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
    instance = new QedItAssetTransfers.DeleteWalletRequest();
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

  describe('DeleteWalletRequest', function() {
    it('should create an instance of DeleteWalletRequest', function() {
      // uncomment below and update the code to test DeleteWalletRequest
      //var instane = new QedItAssetTransfers.DeleteWalletRequest();
      //expect(instance).to.be.a(QedItAssetTransfers.DeleteWalletRequest);
    });

    it('should have the property walletLabel (base name: "wallet_label")', function() {
      // uncomment below and update the code to test the property walletLabel
      //var instane = new QedItAssetTransfers.DeleteWalletRequest();
      //expect(instance).to.be();
    });

    it('should have the property authorization (base name: "authorization")', function() {
      // uncomment below and update the code to test the property authorization
      //var instane = new QedItAssetTransfers.DeleteWalletRequest();
      //expect(instance).to.be();
    });

  });

}));
