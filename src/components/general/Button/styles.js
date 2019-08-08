//Libraries
import { Dimensions, Platform } from 'react-native';
//Constants
const deviceWidth = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export default {
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth - 40,
    backgroundColor: 'rgba(66,81,175,1)',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  btnTextStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
};
