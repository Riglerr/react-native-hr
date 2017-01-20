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
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>


        <View>
        </View>
        <View>
        </View>
        <View>
          <Text style={styles.subtitle}>Solid Line</Text>
          <Hr />
        </View>

        <View>
          <Text style={styles.subtitle}>Solid Line with left margin</Text>
          <Hr marginLeft={50} />
        </View>

        <View>
          <Text style={styles.subtitle}>Line with text</Text>
          <Hr text="react-native" />
        </View>

        <View>
          <Text style={styles.subtitle}>Linw with text and text style</Text>
          <Hr text="text style"
            textStyle={{
              color: "red", fontSize: 20,
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: "#000"
            }}
            />
        </View>

        <View>
          <Text style={styles.subtitle}>Line with line style</Text>
          <Hr text="line style"
            lineStyle={{
              backgroundColor: "blue",
              height: 4
            }}
            />
        </View>

        <View>
          <Text style={styles.subtitle}>Line style and text style</Text>
          <Hr lineColor='red' text='line and text style'
            lineStyle={{
              backgroundColor: "blue",
              height: 2
            }}
            textStyle={{
              color: "green",
              fontSize: 20,
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: "#000"
            }}
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

