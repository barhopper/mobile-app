import React from 'react';
import {
  Body,
  Header,
  Left,
  Right,
  Title
} from 'native-base';
import { TouchableOpacity, Image, View,Text } from 'react-native';
import PropTypes from 'prop-types'


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onPress, headerTitle, userimg, userprofile, notification, profile, backgo,skip,map,mapview} = this.props;
    return (

      <Header 
      androidStatusBarColor ="#c42d3e"
      style={{ backgroundColor: '#c42d3e', }}>
        <Left style={{ flex: 1 }}>
          <TouchableOpacity onPress={onPress} >
            <Image source={backgo}
              style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                tintColor: '#fff',
              }}>
            </Image>
          </TouchableOpacity>
          {map !== undefined && 
          <TouchableOpacity onPress={onPress} >
            <Image source={map}
              style={{
                width: 60,
                height: 22,
                marginLeft: 10,
               marginTop:-15
              }}>
            </Image>
          </TouchableOpacity>
          }
        </Left>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center'
        }}>
          <Title style={{
            color: '#fff',
            textAlign: "center"
          }}>
            {headerTitle}
          </Title>
        </View>
        <Right style={{ flexDirection: 'row', flex: 1, }}>
          <TouchableOpacity onPress={notification} >
            <Image source={userimg}
              style={{
                width: 16,
                height: 16,
                marginRight: 20,
                // tintColor: '#fff'
              }}>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={profile} >
            <Image source={userprofile}
              style={{ width: 18, height: 18, marginRight: 10 }}>
            </Image>
          </TouchableOpacity>

          {skip !== undefined && 
          <TouchableOpacity onPress={profile} >
         <Text style={{color:'#fff',fontSize:16}}>{skip}</Text>
          </TouchableOpacity>
              }
        </Right>

      </Header>

    );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  onPressRight: PropTypes.func,
  iconRight: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default AppHeader;