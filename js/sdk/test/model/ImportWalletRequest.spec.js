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
    instance = new QedItAssetTransfers.ImportWalletRequest();
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

  describe('ImportWalletRequest', function() {
    it('should create an instance of ImportWalletRequest', function() {
      // uncomment below and update the code to test ImportWalletRequest
      //var instance = new QedItAssetTransfers.ImportWalletRequest();
      //expect(instance).to.be.a(QedItAssetTransfers.ImportWalletRequest);
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new QedItAssetTransfers.ImportWalletRequest();
      //expect(instance).to.be();
    });

    it('should have the property encryptedSk (base name: "encrypted_sk")', function() {
      // uncomment below and update the code to test the property encryptedSk
      //var instance = new QedItAssetTransfers.ImportWalletRequest();
      //expect(instance).to.be();
    });

    it('should have the property authorization (base name: "authorization")', function() {
      // uncomment below and update the code to test the property authorization
      //var instance = new QedItAssetTransfers.ImportWalletRequest();
      //expect(instance).to.be();
    });

    it('should have the property salt (base name: "salt")', function() {
      // uncomment below and update the code to test the property salt
      //var instance = new QedItAssetTransfers.ImportWalletRequest();
      //expect(instance).to.be();
    });

  });

}));
