//Libraries
import { Dimensions, Platform } from 'react-native';
//Constants
const deviceWidth = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export default {
  container: {
    height: 70,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  paddingView: {
    width: 15,
  },
  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  fieldLabel: {
    height: 15,
    fontSize: 10,
    color: '#B1B1B1',
  },
  fieldContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  withBorder: {
    borderColor: '#C8C7CC',
  },
  valueText: {
    height: isIOS ? 45 : 60,
    fontSize: 16,
    color: '#111111',
    borderWidth: 0.5,
    paddingLeft: 10,
    borderRadius: 5,
  },
  focused: {
    bottom: 5,
    color: '#01579B',
    fontSize: 12,
  },
  iconStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    right: 10,
    top: 12,
    alignSelf: 'center',
  },
  passwordError: {
    fontSize: 14,
    color: 'red',
    width: deviceWidth * 0.9,
    alignSelf: 'center',
  },
};
