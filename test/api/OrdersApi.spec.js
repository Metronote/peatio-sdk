/**
 * API Peatio
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    factory(root.expect, root.ApiPeatio);
  }
}(this, function(expect, ApiPeatio) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiPeatio.OrdersApi();
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

  describe('OrdersApi', function() {
    describe('getV2Orders', function() {
      it('should call getV2Orders successfully', function(done) {
        //uncomment below and update the code to test getV2Orders
        //instance.getV2Orders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2Orders', function() {
      it('should call postV2Orders successfully', function(done) {
        //uncomment below and update the code to test postV2Orders
        //instance.postV2Orders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2OrdersClear', function() {
      it('should call postV2OrdersClear successfully', function(done) {
        //uncomment below and update the code to test postV2OrdersClear
        //instance.postV2OrdersClear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV2OrdersMulti', function() {
      it('should call postV2OrdersMulti successfully', function(done) {
        //uncomment below and update the code to test postV2OrdersMulti
        //instance.postV2OrdersMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
