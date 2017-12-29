/**
 * Peatio SDK
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'api/DepositApi', 'api/Deposit_addressApi', 'api/DepositsApi', 'api/DepthApi', 'api/KApi', 'api/K_with_pending_tradesApi', 'api/MarketsApi', 'api/MembersApi', 'api/OrderApi', 'api/Order_bookApi', 'api/OrdersApi', 'api/TickersApi', 'api/TimestampApi', 'api/TradesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/DepositApi'), require('./api/Deposit_addressApi'), require('./api/DepositsApi'), require('./api/DepthApi'), require('./api/KApi'), require('./api/K_with_pending_tradesApi'), require('./api/MarketsApi'), require('./api/MembersApi'), require('./api/OrderApi'), require('./api/Order_bookApi'), require('./api/OrdersApi'), require('./api/TickersApi'), require('./api/TimestampApi'), require('./api/TradesApi'));
  }
}(function(ApiClient, DepositApi, Deposit_addressApi, DepositsApi, DepthApi, KApi, K_with_pending_tradesApi, MarketsApi, MembersApi, OrderApi, Order_bookApi, OrdersApi, TickersApi, TimestampApi, TradesApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PeatioSdk = require('index'); // See note below*.
   * var xxxSvc = new PeatioSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PeatioSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PeatioSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PeatioSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.2.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DepositApi service constructor.
     * @property {module:api/DepositApi}
     */
    DepositApi: DepositApi,
    /**
     * The Deposit_addressApi service constructor.
     * @property {module:api/Deposit_addressApi}
     */
    Deposit_addressApi: Deposit_addressApi,
    /**
     * The DepositsApi service constructor.
     * @property {module:api/DepositsApi}
     */
    DepositsApi: DepositsApi,
    /**
     * The DepthApi service constructor.
     * @property {module:api/DepthApi}
     */
    DepthApi: DepthApi,
    /**
     * The KApi service constructor.
     * @property {module:api/KApi}
     */
    KApi: KApi,
    /**
     * The K_with_pending_tradesApi service constructor.
     * @property {module:api/K_with_pending_tradesApi}
     */
    K_with_pending_tradesApi: K_with_pending_tradesApi,
    /**
     * The MarketsApi service constructor.
     * @property {module:api/MarketsApi}
     */
    MarketsApi: MarketsApi,
    /**
     * The MembersApi service constructor.
     * @property {module:api/MembersApi}
     */
    MembersApi: MembersApi,
    /**
     * The OrderApi service constructor.
     * @property {module:api/OrderApi}
     */
    OrderApi: OrderApi,
    /**
     * The Order_bookApi service constructor.
     * @property {module:api/Order_bookApi}
     */
    Order_bookApi: Order_bookApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The TickersApi service constructor.
     * @property {module:api/TickersApi}
     */
    TickersApi: TickersApi,
    /**
     * The TimestampApi service constructor.
     * @property {module:api/TimestampApi}
     */
    TimestampApi: TimestampApi,
    /**
     * The TradesApi service constructor.
     * @property {module:api/TradesApi}
     */
    TradesApi: TradesApi
  };

  return exports;
}));
