/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Hr from './hr.dist'
class examples extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
      <View>
        </View>
        <View>
        </View>
        <View>
          <Text style={styles.subtitle}>Solid Line</Text>
          <Hr lineColor='#b3b3b3'/>
        </View>
        <View>
          <Text style={styles.subtitle}>Solid Line with text</Text>
          <Hr lineColor='#b3b3b3'
              text='react-native'
          />
        </View>
        <View>
          <Text style={styles.subtitle}>Solid Line with text and textColor</Text>
          <Hr lineColor='#b3b3b3'
              text='react-native'
              textColor='steelblue'
          />
        </View>
        <View>
        </View>
        <View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
});

AppRegistry.registerComponent('examples', () => examples);
