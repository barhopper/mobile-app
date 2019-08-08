//libraries
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//styling
import styles from './styles';

class FloatingLabel extends Component {
  constructor(props) {
    super(props);

    let initialPadding = 9;
    let initialOpacity = 0;

    if (this.props.visible) {
      initialPadding = 5;
      initialOpacity = 1;
    }

    this.state = {
      paddingAnim: new Animated.Value(initialPadding),
      opacityAnim: new Animated.Value(initialOpacity),
    };
  }

  componentWillReceiveProps(newProps) {
    // Animated.timing(this.state.paddingAnim, {
    //   toValue: newProps.visible ? 5 : 9,
    //   duration: 230,
    // }).start();
    // return Animated.timing(this.state.opacityAnim, {
    //   toValue: newProps.visible ? 1 : 0,
    //   duration: 230,
    // }).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.floatingLabel,
          {
            height: 90,
            marginTop: -5,
            // paddingTop: this.state.paddingAnim,
            // opacity: this.state.opacityAnim,
            paddingLeft: 10,
          },
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class TextFieldHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginAnim: new Animated.Value(this.props.withValue ? 10 : 0),
      text: 'hello',
    };
  }

  componentWillReceiveProps(newProps) {
    return Animated.timing(this.state.marginAnim, {
      toValue: newProps.withValue ? 10 : 8,
      duration: 230,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{ marginTop: -10 }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

class FloatLabelTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      text: this.props.emailValue || '',
      password: this.props.passwordValue || '',
      number: '',
      showPassword: false,
      passwordIcon: 'visibility-off',
    };
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.hasOwnProperty('value') &&
      newProps.value !== this.state.text
    ) {
      this.setState({ text: newProps.value });
    }
    if (
      newProps.hasOwnProperty('value') &&
      newProps.value !== this.state.password
    ) {
      this.setState({ password: newProps.value });
    }
  }

  //check if email is valid
  validate() {
    let reg = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.text != '') {
      if (reg.test(this.state.text) === false) {
        this.setState({ text: '', password: '' });
        Alert.alert('Warning', 'Invalid Email Format');
        return false;
      } else {
        return true;
      }
    }
  }
  //toggles password visibility
  setShowPassword() {
    const { showPassword } = this.state;
    let passwordIconName = 'visibility-off';
    if (!showPassword) {
      passwordIconName = 'visibility';
    }
    this.setState({
      passwordIcon: passwordIconName,
      showPassword: !showPassword,
    });
  }
  leftPadding() {
    return { width: this.props.leftPadding || 0 };
  }

  withBorder() {
    if (!this.props.noBorder) {
      return styles.withBorder;
    }
  }
  //sending text value to parent
  textHandler(value) {
    this.props.valueReturned(value);

    this.setState({
      text: value,
    });
    try {
      return this.props.onChangeTextValue(value);
    } catch (_error) {}
  }
  //When type is Text
  emailField() {
    {
      return (
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <View style={[styles.paddingView, this.leftPadding()]} />
            <View style={[styles.fieldContainer, this.withBorder()]}>
              <FloatingLabel visible={this.state.text}>
                <Text style={[styles.fieldLabel, this.labelStyle()]}>
                  {this.placeholderValue()}
                </Text>
              </FloatingLabel>

              <TextFieldHolder withValue={this.state.text}>
                <TextInput
                  {...this.props}
                  ref="input"
                  autoCorrect={this.props.autoCorrect}
                  underlineColorAndroid="transparent"
                  style={[styles.valueText]}
                  defaultValue={this.props.defaultValue}
                  value={this.state.text}
                  maxLength={this.props.maxLength}
                  onFocus={() => this.setFocus()}
                  onBlur={() => this.unsetFocus()}
                  onChangeText={text => this.textHandler(text)}
                  placeholderTextColor="grey"
                  keyboardType="default"
                  onEndEditing={() => this.validate()}
                />
                <View style={styles.iconStyle}>
                  <MaterialIcon name="person" size={20} />
                </View>
              </TextFieldHolder>
            </View>
          </View>
        </View>
      );
    }
  }
  textField() {
    {
      return (
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <View style={[styles.paddingView, this.leftPadding()]} />
            <View style={[styles.fieldContainer, this.withBorder()]}>
              <FloatingLabel visible={this.state.text}>
                <Text style={[styles.fieldLabel, this.labelStyle()]}>
                  {this.placeholderValue()}
                </Text>
              </FloatingLabel>

              <TextFieldHolder withValue={this.state.text}>
                <TextInput
                  {...this.props}
                  ref="input"
                  autoCorrect={this.props.autoCorrect}
                  underlineColorAndroid="transparent"
                  style={[styles.valueText]}
                  defaultValue={this.props.defaultValue}
                  value={this.state.text}
                  maxLength={this.props.maxLength}
                  onFocus={() => this.setFocus()}
                  onBlur={() => this.unsetFocus()}
                  onChangeText={text => this.textHandler(text)}
                  placeholderTextColor="grey"
                  keyboardType="default"
                />
                <View style={styles.iconStyle}>
                  <MaterialIcon name="person" size={20} />
                </View>
              </TextFieldHolder>
            </View>
          </View>
        </View>
      );
    }
  }

  //sending password value to parent
  passwordHandler(value) {
    this.props.passwordValueReturned(value);
    this.setState({
      password: value,
    });
    try {
      return this.props.onChangeTextValue(value);
    } catch (_error) {}
  }

  //when type is Password
  passwordField() {
    {
      return (
        <View style={styles.container}>
          <View style={styles.viewContainer}>
            <View style={[styles.paddingView, this.leftPadding()]} />
            <View style={[styles.fieldContainer, this.withBorder()]}>
              <FloatingLabel visible={this.state.password}>
                <Text style={[styles.fieldLabel, this.labelStyle()]}>
                  {this.placeholderValue()}
                </Text>
              </FloatingLabel>

              <TextFieldHolder withValue={this.state.password}>
                <TextInput
                  {...this.props}
                  ref="input"
                  autoCorrect={this.props.autoCorrect}
                  underlineColorAndroid="transparent"
                  style={[styles.valueText]}
                  defaultValue={this.props.defaultValue}
                  value={this.state.password}
                  maxLength={this.props.maxLength}
                  onFocus={() => this.setFocus()}
                  onBlur={() => this.unsetFocus()}
                  onChangeText={password => this.passwordHandler(password)}
                  placeholderTextColor="grey"
                  keyboardType="default"
                  secureTextEntry={!this.state.showPassword}
                  maxLength={21}
                />
                <TouchableOpacity
                  style={styles.iconStyle}
                  onPress={() => this.setShowPassword()}
                >
                  <MaterialIcon name={this.state.passwordIcon} size={20} />
                </TouchableOpacity>
              </TextFieldHolder>
            </View>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.props.type == 'text' && this.textField()}
        {this.props.type == 'email' && this.emailField()}
        {this.props.type == 'password' && this.passwordField()}
        {this.state.password.length > 30 && (
          <View>
            <Text style={styles.passwordError}>
              Length of password should be less than or equal to 20 characters..
            </Text>
          </View>
        )}
      </View>
    );
  }

  inputRef() {
    return this.refs.input;
  }

  focus() {
    this.inputRef().focus();
  }

  blur() {
    this.inputRef().blur();
  }

  isFocused() {
    return this.inputRef().isFocused();
  }

  clear() {
    this.inputRef().clear();
  }

  setFocus() {
    this.setState({
      focused: true,
    });
    try {
      return this.props.onFocus();
    } catch (_error) {}
  }

  unsetFocus() {
    this.setState({
      focused: false,
    });
    try {
      return this.props.onBlur();
    } catch (_error) {}
  }

  labelStyle() {
    if (this.state.focused) {
      return styles.focused;
    } else {
      return styles.focused;
    }
  }

  placeholderValue() {
    if (this.state.text) {
      return this.props.placeholder;
    }
    if (this.state.password) {
      return this.props.placeholder;
    }
  }
}

export default FloatLabelTextField;
