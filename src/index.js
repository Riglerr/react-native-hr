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

  }

  render() {
    let hr
    if (!this.props.text) {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginRight: 8 }}>
          <View style={[styles.line, { backgroundColor: this.props.lineColour }]} />
        </View>
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginRight: 8 }}>
          <View style={[styles.line, { backgroundColor: this.props.lineColour }]} />
          <View style={styles.textContainer} >
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
          <View style={[styles.line, { backgroundColor: this.props.lineColour }]} />
        </View>
      )
    }
  }
}

Hr.propTypes = {
  lineColor: PropTypes.string,
  text: PropTypes.string
};

export default Hr;
