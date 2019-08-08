import React from "react";
import { View, Text, StatusBar, Image,Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: ''
        };
    };
    componentWillMount() {
        try {
            setTimeout(() => {
              Actions.Landingpage()
            }, 1500);
        }
        catch (error) {
            console.log('error' + error)
        }
    }
    render() {
        return (
            <View style={{ flex:1 , }}>
                <Image source={require('./../../components/Images/Splash.jpg')} style={{
                    height: "100%", width: "100%",
                }}>
                </Image>
            </View>
        );
    }
}


export default Splash;
