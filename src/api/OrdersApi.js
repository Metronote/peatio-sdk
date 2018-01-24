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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PeatioSdk) {
      root.PeatioSdk = {};
    }
    root.PeatioSdk.OrdersApi = factory(root.PeatioSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Orders service.
   * @module api/OrdersApi
   * @version 0.2.6
   */

  /**
   * Constructs a new OrdersApi. 
   * @alias module:api/OrdersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getV2Orders operation.
     * @callback module:api/OrdersApi~getV2OrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your orders, results is paginated.
     * Get your orders, results is paginated.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Filter order by state, default to &#39;wait&#39; (active orders). (default to wait)
     * @param {Number} opts.limit Limit the number of returned orders, default to 100. (default to 100)
     * @param {Number} opts.page Specify the page of paginated results. (default to 1)
     * @param {module:model/String} opts.orderBy If set, returned orders will be sorted in specific order, default to &#39;asc&#39;. (default to asc)
     * @param {module:api/OrdersApi~getV2OrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getV2Orders = function(market, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling getV2Orders");
      }


      var pathParams = {
      };
      var queryParams = {
        'market': market,
        'state': opts['state'],
        'limit': opts['limit'],
        'page': opts['page'],
        'order_by': opts['orderBy']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postV2Orders operation.
     * @callback module:api/OrdersApi~postV2OrdersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Sell/Buy order.
     * Create a Sell/Buy order.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {module:model/String} side Either &#39;sell&#39; or &#39;buy&#39;.
     * @param {String} volume The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order&#39;s volume would be &#39;5.0&#39;, its remaining_volume would be &#39;2.0&#39;, its executed volume is &#39;3.0&#39;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.price Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is &#39;3000.0&#39;
     * @param {module:model/String} opts.ordType 
     * @param {module:api/OrdersApi~postV2OrdersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postV2Orders = function(market, side, volume, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling postV2Orders");
      }

      // verify the required parameter 'side' is set
      if (side === undefined || side === null) {
        throw new Error("Missing the required parameter 'side' when calling postV2Orders");
      }

      // verify the required parameter 'volume' is set
      if (volume === undefined || volume === null) {
        throw new Error("Missing the required parameter 'volume' when calling postV2Orders");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'market': market,
        'side': side,
        'volume': volume,
        'price': opts['price'],
        'ord_type': opts['ordType']
      };

      var authNames = ['jwt'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postV2OrdersClear operation.
     * @callback module:api/OrdersApi~postV2OrdersClearCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel all my orders.
     * Cancel all my orders.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.side If present, only sell orders (asks) or buy orders (bids) will be canncelled.
     * @param {module:api/OrdersApi~postV2OrdersClearCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postV2OrdersClear = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'side': opts['side']
      };

      var authNames = ['jwt'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders/clear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postV2OrdersMulti operation.
     * @callback module:api/OrdersApi~postV2OrdersMultiCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create multiple sell/buy orders.
     * Create multiple sell/buy orders.
     * @param {module:model/String} market Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets.
     * @param {Array.<String>} ordersSide Either &#39;sell&#39; or &#39;buy&#39;.
     * @param {Array.<String>} ordersVolume The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order&#39;s volume would be &#39;5.0&#39;, its remaining_volume would be &#39;2.0&#39;, its executed volume is &#39;3.0&#39;.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.ordersPrice Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is &#39;3000.0&#39;
     * @param {Array.<String>} opts.ordersOrdType 
     * @param {module:api/OrdersApi~postV2OrdersMultiCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postV2OrdersMulti = function(market, ordersSide, ordersVolume, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'market' is set
      if (market === undefined || market === null) {
        throw new Error("Missing the required parameter 'market' when calling postV2OrdersMulti");
      }

      // verify the required parameter 'ordersSide' is set
      if (ordersSide === undefined || ordersSide === null) {
        throw new Error("Missing the required parameter 'ordersSide' when calling postV2OrdersMulti");
      }

      // verify the required parameter 'ordersVolume' is set
      if (ordersVolume === undefined || ordersVolume === null) {
        throw new Error("Missing the required parameter 'ordersVolume' when calling postV2OrdersMulti");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'market': market,
        'orders[side]': this.apiClient.buildCollectionParam(ordersSide, 'csv'),
        'orders[volume]': this.apiClient.buildCollectionParam(ordersVolume, 'csv'),
        'orders[price]': this.apiClient.buildCollectionParam(opts['ordersPrice'], 'csv'),
        'orders[ord_type]': this.apiClient.buildCollectionParam(opts['ordersOrdType'], 'csv')
      };

      var authNames = ['jwt'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/orders/multi', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
