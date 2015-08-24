'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function sleep(period) {
  return new _Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, period);
  });
}

function log() {
  var msg = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];

  console.log(msg);
  return this;
}

var Timing = (function (_React$Component) {
  _inherits(Timing, _React$Component);

  function Timing() {
    _classCallCheck(this, Timing);

    _get(Object.getPrototypeOf(Timing.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      value: this.props.from
    };
  }

  _createClass(Timing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var sequence, i;
      return _regeneratorRuntime.async(function componentDidMount$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            sequence = this.props.sequence;
            i = 0;

          case 2:
            if (!(i < sequence.length)) {
              context$2$0.next = 9;
              break;
            }

            this.setState({
              value: sequence[i].value
            });
            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(sleep(sequence[i].period));

          case 6:
            i++;
            context$2$0.next = 2;
            break;

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state.value);
    }
  }], [{
    key: 'defaultProps',
    value: {
      from: null,
      sequence: []
    },
    enumerable: true
  }]);

  return Timing;
})(_react2['default'].Component);

exports.Timing = Timing;