//libraries
import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

//styling
import styles from "./styles";

export default class RememberMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let name = '';
    // if (!this.props.isRemember) {
    //   name = 'check-box';
    // } else {
    //   name = 'check-box-outline-blank';
    // }
    return (
      <TouchableOpacity
        style={[styles.mainContainer, { ...this.props }]}
        onPress={this.props.rememberFunc}
      >
        <MaterialIcon
          name={this.props.iconName}
          size={16}
          color="rgba(117,117,117,1)"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.rememberTextStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
