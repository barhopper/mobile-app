import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class Pausevideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <AppHeader
                    headerTitle={"Video - O'Keefe's Bar & Grill"}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}

                />
           
                    <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                        <View style={{}}>
                            <TouchableOpacity>
                        <ImageBackground 
                        resizeMode="stretch"
                        source={require('./../../components/Images/Video-2.png')}
                            style={{ height:width/2+30, width:width, }}>
                        </ImageBackground>
                        </TouchableOpacity>
                        </View>
                    </View>
               
            </View>
        );
    }
}


export default Pausevideo;
