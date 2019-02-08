"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = require("axios");

var NetworkError_1 = require("./errors/NetworkError");

var ResponseError_1 = require("./errors/ResponseError");
/**
 * APIRequestClient
 */


var APIRequestClient =
/*#__PURE__*/
function () {
  function APIRequestClient(url, baseURL) {
    _classCallCheck(this, APIRequestClient);

    this.headers = {};
    this.url = url;
    this.bodyType = 'json';
    this._axios = axios_1.default.create({
      baseURL: baseURL
    });
  }

  _createClass(APIRequestClient, [{
    key: "setUrl",
    value: function setUrl(url) {
      this.url = url;
      return this;
    }
  }, {
    key: "setMethod",
    value: function setMethod(method) {
      this.method = method;
      return this;
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: "setBodyType",
    value: function setBodyType(bodyType) {
      this.bodyType = bodyType;
      return this;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.data = data;
      return this;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "setParams",
    value: function setParams(params) {
      this.params = params;
      return this;
    }
  }, {
    key: "appendHeader",
    value: function appendHeader(key, value) {
      this.headers[key] = value;
      return this;
    }
  }, {
    key: "appendHeaders",
    value: function appendHeaders(headers) {
      this.headers = Object.assign({}, this.headers, headers);
      return this;
    }
  }, {
    key: "getHeaders",
    value: function getHeaders() {
      return this.headers;
    }
  }, {
    key: "getAxiosInstance",
    value: function getAxiosInstance() {
      return this._axios;
    }
  }, {
    key: "throwError",
    value: function throwError(error) {
      if (error.response) {
        return new ResponseError_1.ResponseError(this.url, error.response);
      }

      return new NetworkError_1.RequestError(this.url);
    }
  }, {
    key: "send",
    value: function send() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (this.bodyType === 'form') {
                  this.headers['Content-Type'] = 'multipart/form-data';
                }

                _context.next = 4;
                return this._axios.request({
                  method: this.method,
                  url: this.url,
                  headers: this.headers,
                  data: this.data,
                  params: this.params
                });

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                throw this.throwError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));
    }
  }]);

  return APIRequestClient;
}();

exports.APIRequestClient = APIRequestClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFQSVJlcXVlc3RDbGllbnQuanMiXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJ2YWx1ZSIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImF4aW9zXzEiLCJyZXF1aXJlIiwiTmV0d29ya0Vycm9yXzEiLCJSZXNwb25zZUVycm9yXzEiLCJBUElSZXF1ZXN0Q2xpZW50IiwidXJsIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJib2R5VHlwZSIsIl9heGlvcyIsImRlZmF1bHQiLCJjcmVhdGUiLCJtZXRob2QiLCJkYXRhIiwicGFyYW1zIiwia2V5IiwiYXNzaWduIiwiZXJyb3IiLCJyZXNwb25zZSIsIlJlc3BvbnNlRXJyb3IiLCJSZXF1ZXN0RXJyb3IiLCJyZXF1ZXN0IiwidGhyb3dFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFJLFVBQVEsU0FBS0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFNBQU8sS0FBS0QsQ0FBQyxLQUFLQSxDQUFDLEdBQUdFLE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRUMsUUFBQUEsSUFBSSxDQUFDTixTQUFTLENBQUNPLElBQVYsQ0FBZUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBT0csQ0FBUCxFQUFVO0FBQUVMLFFBQUFBLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFD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Q0FBa0MsS0FBS2QsR0FBdkMsRUFBNENZLEtBQUssQ0FBQ0MsUUFBbEQsQ0FBUDtBQUNIOztBQUNELGFBQU8sSUFBSWhCLGNBQWMsQ0FBQ2tCLFlBQW5CLENBQWdDLEtBQUtmLEdBQXJDLENBQVA7QUFDSDs7OzJCQUNNO0FBQ0gsYUFBTzFCLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQjtBQUFBO0FBQUEsOEJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUUvQixvQkFBSSxLQUFLNkIsUUFBTCxLQUFrQixNQUF0QixFQUE4QjtBQUMxQix1QkFBS0QsT0FBTCxDQUFhLGNBQWIsSUFBK0IscUJBQS9CO0FBQ0g7O0FBSjhCO0FBS2QsdUJBQU0sS0FBS0UsTUFBTCxDQUFZWSxPQUFaLENBQW9CO0FBQ3ZDVCxrQkFBQUEsTUFBTSxFQUFFLEtBQUtBLE1BRDBCO0FBRXZDUCxrQkFBQUEsR0FBRyxFQUFFLEtBQUtBLEdBRjZCO0FBR3ZDRSxrQkFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BSHlCO0FBSXZDTSxrQkFBQUEsSUFBSSxFQUFFLEtBQUtBLElBSjRCO0FBS3ZDQyxrQkFBQUEsTUFBTSxFQUFFLEtBQUtBO0FBTDBCLGlCQUFwQixDQUFOOztBQUxjO0FBS3pCSSxnQkFBQUEsUUFMeUI7QUFBQSxpREFZeEJBLFFBQVEsQ0FBQ0wsSUFaZTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFlekIsS0FBS1MsVUFBTCxhQWZ5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF2QixFQUFoQjtBQWtCSDs7Ozs7O0FBRUx2QixPQUFPLENBQUNLLGdCQUFSLEdBQTJCQSxnQkFBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXhpb3NfMSA9IHJlcXVpcmUoXCJheGlvc1wiKTtcbmNvbnN0IE5ldHdvcmtFcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL05ldHdvcmtFcnJvclwiKTtcbmNvbnN0IFJlc3BvbnNlRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9SZXNwb25zZUVycm9yXCIpO1xuLyoqXG4gKiBBUElSZXF1ZXN0Q2xpZW50XG4gKi9cbmNsYXNzIEFQSVJlcXVlc3RDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgYmFzZVVSTCkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuYm9keVR5cGUgPSAnanNvbic7XG4gICAgICAgIHRoaXMuX2F4aW9zID0gYXhpb3NfMS5kZWZhdWx0LmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0VXJsKHVybCkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldE1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRNZXRob2QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGhvZDtcbiAgICB9XG4gICAgc2V0Qm9keVR5cGUoYm9keVR5cGUpIHtcbiAgICAgICAgdGhpcy5ib2R5VHlwZSA9IGJvZHlUeXBlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBzZXRQYXJhbXMocGFyYW1zKSB7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXBwZW5kSGVhZGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFwcGVuZEhlYWRlcnMoaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycztcbiAgICB9XG4gICAgZ2V0QXhpb3NJbnN0YW5jZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F4aW9zO1xuICAgIH1cbiAgICB0aHJvd0Vycm9yKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZUVycm9yXzEuUmVzcG9uc2VFcnJvcih0aGlzLnVybCwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgTmV0d29ya0Vycm9yXzEuUmVxdWVzdEVycm9yKHRoaXMudXJsKTtcbiAgICB9XG4gICAgc2VuZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9keVR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHRoaXMuX2F4aW9zLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0aGlzLnRocm93RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5BUElSZXF1ZXN0Q2xpZW50ID0gQVBJUmVxdWVzdENsaWVudDtcbiJdfQ==