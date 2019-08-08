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

class Termsandconditions extends React.Component {
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
                    headerTitle={'Terms and Conditions'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{}}>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                Far far away behind the world mountains and far from the countries
                                Vokalia and Consonantia,there live the blind texts,Separated they
                                live in Bookmarksgroove right at the coast of the Semantics,
                                a large Language Ocean
                        </Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                Far far away behind the world mountains and far from the countries
                                Vokalia and Consonantia,there live the blind texts,Separated they
                                live in Bookmarksgroove right at the coast of the Semantics,
                                a large Language Ocean
                        </Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                Far far away behind the world mountains and far from the countries
                                Vokalia and Consonantia,there live the blind texts,Separated they
                                live in Bookmarksgroove right at the coast of the Semantics,
                                a large Language Ocean
                        </Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                Far far away behind the world mountains and far from the countries
                                Vokalia and Consonantia,there live the blind texts,Separated they
                                live in Bookmarksgroove right at the coast of the Semantics,
                                a large Language Ocean
                        </Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>
                                Far far away behind the world mountains and far from the countries
                                Vokalia and Consonantia,there live the blind texts,Separated they
                                live in Bookmarksgroove right at the coast of the Semantics,
                                a large Language Ocean
                        </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Termsandconditions;
