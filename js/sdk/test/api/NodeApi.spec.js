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
    instance = new QedItAssetTransfers.NodeApi();
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

  describe('NodeApi', function() {
    describe('nodeDeleteWalletPost', function() {
      it('should call nodeDeleteWalletPost successfully', function(done) {
        //uncomment below and update the code to test nodeDeleteWalletPost
        //instance.nodeDeleteWalletPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeExportWalletPost', function() {
      it('should call nodeExportWalletPost successfully', function(done) {
        //uncomment below and update the code to test nodeExportWalletPost
        //instance.nodeExportWalletPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeGenerateWalletPost', function() {
      it('should call nodeGenerateWalletPost successfully', function(done) {
        //uncomment below and update the code to test nodeGenerateWalletPost
        //instance.nodeGenerateWalletPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeGetAllWalletsPost', function() {
      it('should call nodeGetAllWalletsPost successfully', function(done) {
        //uncomment below and update the code to test nodeGetAllWalletsPost
        //instance.nodeGetAllWalletsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeGetRulesPost', function() {
      it('should call nodeGetRulesPost successfully', function(done) {
        //uncomment below and update the code to test nodeGetRulesPost
        //instance.nodeGetRulesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeImportWalletPost', function() {
      it('should call nodeImportWalletPost successfully', function(done) {
        //uncomment below and update the code to test nodeImportWalletPost
        //instance.nodeImportWalletPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('nodeUnlockWalletPost', function() {
      it('should call nodeUnlockWalletPost successfully', function(done) {
        //uncomment below and update the code to test nodeUnlockWalletPost
        //instance.nodeUnlockWalletPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
