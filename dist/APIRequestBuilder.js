"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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
 * Axios 래핑한 클래스입니다.
 */


var RequestClient =
/*#__PURE__*/
function () {
  function RequestClient(url, baseURL) {
    _classCallCheck(this, RequestClient);

    this.headers = {};
    this.url = url;
    this._axios = axios_1.default.create({
      baseURL: baseURL
    });
  }

  _createClass(RequestClient, [{
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
    key: "setData",
    value: function setData(data) {
      this.data = data;
      return this;
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
    key: "throwError",
    value: function throwError(error) {
      if (error.response) {
        return new ResponseError_1.ResponseError(this.url, error.response);
      }

      return new NetworkError_1.NetworkError(this.url);
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
                _context.next = 3;
                return this._axios.request({
                  method: this.method,
                  url: this.url,
                  headers: this.headers,
                  data: this.data,
                  params: this.params
                });

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw this.throwError(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));
    }
  }]);

  return RequestClient;
}();

exports.RequestClient = RequestClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFQSVJlcXVlc3RCdWlsZGVyLmpzIl0sIm5hbWVzIjpbIl9fYXdhaXRlciIsIlAiLCJzdGVwIiwiZ2VuZXJhdG9yIiwicmVqZWN0IiwicmVzdWx0IiwicmVzb2x2ZSIsIl9hcmd1bWVudHMiLCJPYmplY3QiLCJ2YWx1ZSIsImF4aW9zXzEiLCJyZXF1aXJlIiwiTmV0d29ya0Vycm9yXzEiLCJSZXNwb25zZUVycm9yXzEiLCJSZXF1ZXN0Q2xpZW50IiwiYmFzZVVSTCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwYXJhbXMiLCJrZXkiLCJlcnJvciIsInJlc3BvbnNlIiwiaGVhZGVycyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUksS0FBQSxDQUFBLElBQVEsQ0FBQSxLQUFBLENBQUEsRUFBVCxTQUFDLElBQTJCLFVBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQSxFQUE2QztBQUNyRixTQUFPLEtBQUtDLENBQUMsS0FBS0EsQ0FBQyxHQUFaLE9BQU0sQ0FBTixFQUF5QixVQUFBLE9BQUEsRUFBQSxNQUFBLEVBQTJCO0FBQ3ZELGFBQUEsU0FBQSxDQUFBLEtBQUEsRUFBMEI7QUFBRSxVQUFJO0FBQUVDLFFBQUFBLElBQUksQ0FBQ0MsU0FBUyxDQUFUQSxJQUFBQSxDQUFMRCxLQUFLQyxDQUFELENBQUpEO0FBQU4sT0FBQSxDQUFxQyxPQUFBLENBQUEsRUFBVTtBQUFFRSxRQUFBQSxNQUFNLENBQU5BLENBQU0sQ0FBTkE7QUFBWTtBQUFFOztBQUMzRixhQUFBLFFBQUEsQ0FBQSxLQUFBLEVBQXlCO0FBQUUsVUFBSTtBQUFFRixRQUFBQSxJQUFJLENBQUNDLFNBQVMsQ0FBVEEsT0FBUyxDQUFUQSxDQUFMRCxLQUFLQyxDQUFELENBQUpEO0FBQU4sT0FBQSxDQUF5QyxPQUFBLENBQUEsRUFBVTtBQUFFRSxRQUFBQSxNQUFNLENBQU5BLENBQU0sQ0FBTkE7QUFBWTtBQUFFOztBQUM5RixhQUFBLElBQUEsQ0FBQSxNQUFBLEVBQXNCO0FBQUVDLE1BQUFBLE1BQU0sQ0FBTkEsSUFBQUEsR0FBY0MsT0FBTyxDQUFDRCxNQUFNLENBQTVCQSxLQUFxQixDQUFyQkEsR0FBc0MsSUFBQSxDQUFBLENBQU0sVUFBQSxPQUFBLEVBQW1CO0FBQUVDLFFBQUFBLE9BQU8sQ0FBQ0QsTUFBTSxDQUFkQyxLQUFPLENBQVBBO0FBQTNCLE9BQUEsRUFBQSxJQUFBLENBQUEsU0FBQSxFQUF0Q0QsUUFBc0MsQ0FBdENBO0FBQXVIOztBQUMvSUgsSUFBQUEsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFUQSxLQUFBQSxDQUFBQSxPQUFBQSxFQUF5QkksVUFBVSxJQUFoRCxFQUFhSixDQUFiLEVBQUxELElBQUssRUFBRCxDQUFKQTtBQUpKLEdBQU8sQ0FBUDtBQURKLENBQUE7O0FBUUFNLE1BQU0sQ0FBTkEsY0FBQUEsQ0FBQUEsT0FBQUEsRUFBQUEsWUFBQUEsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0NEOztBQUNBLElBQU1FLE9BQU8sR0FBR0MsT0FBTyxDQUF2QixPQUF1QixDQUF2Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUdELE9BQU8sQ0FBOUIsdUJBQThCLENBQTlCOztBQUNBLElBQU1FLGVBQWUsR0FBR0YsT0FBTyxDQUEvQix3QkFBK0IsQ0FBL0I7QUFDQTs7Ozs7SUFHTUcsYTs7O0FBQ0YsV0FBQSxhQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsRUFBMEI7QUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsYUFBQSxDQUFBOztBQUN0QixTQUFBLE9BQUEsR0FBQSxFQUFBO0FBQ0EsU0FBQSxHQUFBLEdBQUEsR0FBQTtBQUNBLFNBQUEsTUFBQSxHQUFjLE9BQU8sQ0FBUCxPQUFBLENBQUEsTUFBQSxDQUF1QjtBQUNqQ0MsTUFBQUEsT0FBTyxFQUFQQTtBQURpQyxLQUF2QixDQUFkO0FBR0g7Ozs7MkJBQ01DLEcsRUFBSztBQUNSLFdBQUEsR0FBQSxHQUFBLEdBQUE7QUFDQSxhQUFBLElBQUE7QUFDSDs7OzhCQUNTQyxNLEVBQVE7QUFDZCxXQUFBLE1BQUEsR0FBQSxNQUFBO0FBQ0EsYUFBQSxJQUFBO0FBQ0g7Ozs0QkFDT0MsSSxFQUFNO0FBQ1YsV0FBQSxJQUFBLEdBQUEsSUFBQTtBQUNBLGFBQUEsSUFBQTtBQUNIOzs7OEJBQ1NDLE0sRUFBUTtBQUNkLFdBQUEsTUFBQSxHQUFBLE1BQUE7QUFDQSxhQUFBLElBQUE7QUFDSDs7O2lDQUNZQyxHLEVBQUtYLEssRUFBTztBQUNyQixXQUFBLE9BQUEsQ0FBQSxHQUFBLElBQUEsS0FBQTtBQUNBLGFBQUEsSUFBQTtBQUNIOzs7K0JBQ1VZLEssRUFBTztBQUNkLFVBQUlBLEtBQUssQ0FBVCxRQUFBLEVBQW9CO0FBQ2hCLGVBQU8sSUFBSVIsZUFBZSxDQUFuQixhQUFBLENBQWtDLEtBQWxDLEdBQUEsRUFBNENRLEtBQUssQ0FBeEQsUUFBTyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJVCxjQUFjLENBQWxCLFlBQUEsQ0FBZ0MsS0FBdkMsR0FBTyxDQUFQO0FBQ0g7OzsyQkFDTTtBQUNILGFBQU9aLFNBQVMsQ0FBQSxJQUFBLEVBQU8sS0FBUCxDQUFBLEVBQWUsS0FBZixDQUFBO0FBQUE7QUFBQSxNQUFBLGtCQUFBLENBQUEsSUFBQSxDQUF1QixTQUFBLE9BQUEsR0FBQTtBQUFBLFlBQUEsUUFBQTtBQUFBLGVBQUEsa0JBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxRQUFBLENBQUEsUUFBQSxFQUFBO0FBQUEsaUJBQUEsQ0FBQSxFQUFBO0FBQUEsb0JBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxRQUFBLENBQUEsSUFBQTtBQUFBLG1CQUFBLENBQUE7QUFBQSxnQkFBQSxRQUFBLENBQUEsSUFBQSxHQUFBLENBQUE7QUFBQSxnQkFBQSxRQUFBLENBQUEsSUFBQSxHQUFBLENBQUE7QUFFZCx1QkFBTSxLQUFBLE1BQUEsQ0FBQSxPQUFBLENBQW9CO0FBQ3ZDaUIsa0JBQUFBLE1BQU0sRUFBRSxLQUQrQixNQUFBO0FBRXZDRCxrQkFBQUEsR0FBRyxFQUFFLEtBRmtDLEdBQUE7QUFHdkNPLGtCQUFBQSxPQUFPLEVBQUUsS0FIOEIsT0FBQTtBQUl2Q0wsa0JBQUFBLElBQUksRUFBRSxLQUppQyxJQUFBO0FBS3ZDQyxrQkFBQUEsTUFBTSxFQUFFLEtBQUtBO0FBTDBCLGlCQUFwQixDQUFOOztBQUZjLG1CQUFBLENBQUE7QUFFekJHLGdCQUFBQSxRQUZ5QixHQUFBLFFBQUEsQ0FBQSxJQUV6QkE7QUFGeUIsdUJBQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEVBU3hCQSxRQUFRLENBVGdCLElBQUEsQ0FBQTs7QUFBQSxtQkFBQSxDQUFBO0FBQUEsZ0JBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxDQUFBO0FBQUEsZ0JBQUEsUUFBQSxDQUFBLEVBQUEsR0FBQSxRQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsc0JBWXpCLEtBQUEsVUFBQSxDQUFBLFFBQUEsQ0FaeUIsRUFZekIsQ0FaeUI7O0FBQUEsbUJBQUEsRUFBQTtBQUFBLG1CQUFBLEtBQUE7QUFBQSx1QkFBQSxRQUFBLENBQUEsSUFBQSxFQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUF2QyxPQUFnQixDQUFBLENBQWhCO0FBZUg7Ozs7OztBQUVMRSxPQUFPLENBQVBBLGFBQUFBLEdBQUFBLGFBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGF4aW9zXzEgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBOZXR3b3JrRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9OZXR3b3JrRXJyb3JcIik7XG5jb25zdCBSZXNwb25zZUVycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvUmVzcG9uc2VFcnJvclwiKTtcbi8qKlxuICogQXhpb3Mg656Y7ZWR7ZWcIO2BtOuemOyKpOyeheuLiOuLpC5cbiAqL1xuY2xhc3MgUmVxdWVzdENsaWVudCB7XG4gICAgY29uc3RydWN0b3IodXJsLCBiYXNlVVJMKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IHt9O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5fYXhpb3MgPSBheGlvc18xLmRlZmF1bHQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJhc2VVUkwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRVcmwodXJsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0TWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFwcGVuZEhlYWRlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aHJvd0Vycm9yKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZUVycm9yXzEuUmVzcG9uc2VFcnJvcih0aGlzLnVybCwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgTmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKHRoaXMudXJsKTtcbiAgICB9XG4gICAgc2VuZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCB0aGlzLl9heGlvcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdGhpcy50aHJvd0Vycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVxdWVzdENsaWVudCA9IFJlcXVlc3RDbGllbnQ7XG4iXX0=