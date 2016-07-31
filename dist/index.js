'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = _reactNative.StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#b3b3b3'
  },
  text: {
    flex: 1,
    textAlign: 'center'
  },
  textContainer: {
    height: 20,
    marginLeft: 15,
    marginRight: 15
  }
});

var Hr = function (_Component) {
  _inherits(Hr, _Component);

  function Hr(props) {
    _classCallCheck(this, Hr);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Hr).call(this, props));
  }

  _createClass(Hr, [{
    key: 'render',
    value: function render() {
      var hr = void 0;
      if (!this.props.text) {
        return _react2.default.createElement(
          _reactNative.View,
          { style: { flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginRight: 8 } },
          _react2.default.createElement(_reactNative.View, { style: [styles.line, { backgroundColor: this.props.lineColour }] })
        );
      } else {
        return _react2.default.createElement(
          _reactNative.View,
          { style: { flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginRight: 8 } },
          _react2.default.createElement(_reactNative.View, { style: [styles.line, { backgroundColor: this.props.lineColour }] }),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.textContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.text },
              this.props.text
            )
          ),
          _react2.default.createElement(_reactNative.View, { style: [styles.line, { backgroundColor: this.props.lineColour }] })
        );
      }
    }
  }]);

  return Hr;
}(_react.Component);

Hr.propTypes = {
  lineColor: _react.PropTypes.string,
  text: _react.PropTypes.string
};

exports.default = Hr;