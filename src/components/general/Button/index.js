//libraries
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

//styling
import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.mainContainer, { ...this.props.style }]}
      >
        <Text style={[styles.btnTextStyle, { ...this.props.textStyle }]}>
          {this.props.btnName}
        </Text>
      </TouchableOpacity>
    );
  }
}
