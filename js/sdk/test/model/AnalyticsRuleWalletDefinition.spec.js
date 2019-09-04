/**
 * QEDIT - Asset Transfers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.5.0
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
    instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
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

  describe('AnalyticsRuleWalletDefinition', function() {
    it('should create an instance of AnalyticsRuleWalletDefinition', function() {
      // uncomment below and update the code to test AnalyticsRuleWalletDefinition
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be.a(QedItAssetTransfers.AnalyticsRuleWalletDefinition);
    });

    it('should have the property publicKey (base name: "public_key")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

    it('should have the property isAdmin (base name: "is_admin")', function() {
      // uncomment below and update the code to test the property isAdmin
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

    it('should have the property canIssueAssetIdFirst (base name: "can_issue_asset_id_first")', function() {
      // uncomment below and update the code to test the property canIssueAssetIdFirst
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

    it('should have the property canIssueAssetIdLast (base name: "can_issue_asset_id_last")', function() {
      // uncomment below and update the code to test the property canIssueAssetIdLast
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

    it('should have the property canIssueConfidentially (base name: "can_issue_confidentially")', function() {
      // uncomment below and update the code to test the property canIssueConfidentially
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new QedItAssetTransfers.AnalyticsRuleWalletDefinition();
      //expect(instance).to.be();
    });

  });

}));
