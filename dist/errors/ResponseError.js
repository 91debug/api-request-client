"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * response code is not 20x
 */

var ResponseError =
/*#__PURE__*/
function (_Error) {
  _inherits(ResponseError, _Error);

  function ResponseError(url, errorResponse) {
    var _this;

    _classCallCheck(this, ResponseError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResponseError).call(this));
    _this.name = 'ResponseError';
    Object.setPrototypeOf(_assertThisInitialized(_assertThisInitialized(_this)), ResponseError.prototype);
    _this.message = "".concat(url, "\n");
    _this.errorResponse = errorResponse;
    return _this;
  }

  return ResponseError;
}(_wrapNativeSuper(Error));

exports.ResponseError = ResponseError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlc3BvbnNlRXJyb3IuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJSZXNwb25zZUVycm9yIiwidXJsIiwiZXJyb3JSZXNwb25zZSIsIm5hbWUiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIm1lc3NhZ2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFULENBQTdDO0FBQ0E7Ozs7SUFHTUMsYTs7Ozs7QUFDRix5QkFBWUMsR0FBWixFQUFpQkMsYUFBakIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFDNUI7QUFDQSxVQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBUCxJQUFBQSxNQUFNLENBQUNRLGNBQVAsd0RBQTRCSixhQUFhLENBQUNLLFNBQTFDO0FBQ0EsVUFBS0MsT0FBTCxhQUFrQkwsR0FBbEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUw0QjtBQU0vQjs7O21CQVB1QkssSzs7QUFTNUJULE9BQU8sQ0FBQ0UsYUFBUixHQUF3QkEsYUFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogcmVzcG9uc2UgY29kZSBpcyBub3QgMjB4XG4gKi9cbmNsYXNzIFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBlcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdSZXNwb25zZUVycm9yJztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFJlc3BvbnNlRXJyb3IucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dXJsfVxcbmA7XG4gICAgICAgIHRoaXMuZXJyb3JSZXNwb25zZSA9IGVycm9yUmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0cy5SZXNwb25zZUVycm9yID0gUmVzcG9uc2VFcnJvcjtcbiJdfQ==