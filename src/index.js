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

  renderLine() {
    return <View style={[styles.line, { backgroundColor: this.props.lineColor }]} />
  }

  renderText() {
    return (
      <View style={styles.textContainer} >
        <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
      </View>
    )
  }

  renderInner() {
    if (!this.props.text) {
      return this.renderLine()
    }
    return [
      this.renderLine(),
      this.renderText(),
      this.renderLine()
    ]
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginRight: 8 }}>
        {this.renderInner() }
      </View>
    )
  }
}

Hr.propTypes = {
  lineColor: PropTypes.string.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string
};

export default Hr;
