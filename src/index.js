import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#b3b3b3'
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  textContainer: {
    height: 20,
    marginLeft: 15,
    marginRight: 15,
  }
});

class Hr extends Component {
  constructor(props) {
    super(props);

    this.renderLine = this.renderLine.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderInner = this.renderInner.bind(this);
  }

  renderLine(key) {
    return <View key={key} style={[styles.line, { backgroundColor: this.props.lineColor }]} />
  }

  renderText(key) {
    return (
        <View key={key} style={styles.textContainer} >
          <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
        </View>
    )
  }

  renderInner() {
    if (!this.props.text) {
      return this.renderLine()
    }
    return [
      this.renderLine(1),
      this.renderText(2),
      this.renderLine(3)
    ]
  }

  render() {
    const { marginLeft, marginRight } = this.props;

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: {marginLeft}, marginRight: {marginRight} }}>
          {this.renderInner() }
        </View>
    )
  }
}

Hr.propTypes = {
  lineColor: PropTypes.string.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number
};

Hr.defaultProps = {
  marginLeft: 8,
  marginRight: 8
};

export default Hr;
