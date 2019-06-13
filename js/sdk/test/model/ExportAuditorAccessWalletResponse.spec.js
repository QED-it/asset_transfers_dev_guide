/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.4.0
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
    instance = new QedItAssetTransfers.ExportAuditorAccessWalletResponse();
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

  describe('ExportAuditorAccessWalletResponse', function() {
    it('should create an instance of ExportAuditorAccessWalletResponse', function() {
      // uncomment below and update the code to test ExportAuditorAccessWalletResponse
      //var instance = new QedItAssetTransfers.ExportAuditorAccessWalletResponse();
      //expect(instance).to.be.a(QedItAssetTransfers.ExportAuditorAccessWalletResponse);
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new QedItAssetTransfers.ExportAuditorAccessWalletResponse();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "public_key")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new QedItAssetTransfers.ExportAuditorAccessWalletResponse();
      //expect(instance).to.be();
    });

    it('should have the property accessKey (base name: "access_key")', function() {
      // uncomment below and update the code to test the property accessKey
      //var instance = new QedItAssetTransfers.ExportAuditorAccessWalletResponse();
      //expect(instance).to.be();
    });

  });

}));
