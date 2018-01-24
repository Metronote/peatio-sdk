/**
 * Peatio SDK
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
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
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Market'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Market'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.MarketsApi = factory(root.PeatioSdk.ApiClient, root.PeatioSdk.Market);
  }
}(this, function(ApiClient, Market) {
  'use strict';

  /**
   * Markets service.
   * @module api/MarketsApi
   * @version 0.2.6
   */

  /**
   * Constructs a new MarketsApi.
   * @alias module:api/MarketsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2Markets operation.
     * @callback module:api/MarketsApi~getV2MarketsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Market>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all available markets.
     * Get all available markets.
     * @param {module:api/MarketsApi~getV2MarketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Market>}
     */
    this.getV2Markets = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Market];

      return this.apiClient.callApi(
        '/markets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
