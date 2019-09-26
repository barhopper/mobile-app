import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";
import { AsyncStorage, Text } from "react-native";
import Loader from './../constants/Loader';
import Splash from './../containers/Splash';
import SignupType from './../containers/SignupType';
import SignupCustomer from './../containers/SignupCustomer';
import Homepage from './../containers/Homepage';
import Aboutapp from './../containers/AboutApp';
import Notification from './../containers/Notification';
import Livefeed from './../containers/Livefeed';
import Promodetails from './../containers/Promodetails';
import Termsandconditions from './../containers/TermsandConditions';
import Privacypolicy from './../containers/Privacypolicy';
import Settings from './../containers/Settings';
import Searchandfilter from './../containers/Searchandfilter';
import Subcategory from './../containers/Searchsubcategory';
import Barpage from './../containers/Barpage';
import Checkin from './../containers/Checkinuser';
import Pausevideo from './../containers/Pausevideo';
import Playvideo from './../containers/Playvideo';
import Feedback from './../containers/Feedback';
import Mappage from './../containers/Mappage';
import Profile from './../containers/Profile';
import Landingpage from './../containers/Landing-Page';
import Login from './../containers/Login'; 
import RateApp from './../containers/RateApp'; 
import Repot_a_Problem from './../containers/Repot_a_Problem'; 
import ResetPassword from './../containers/ResetPassword';
import ChangePassword from './../containers/ChangePassword';
import AccountVerified from './../containers/AccountVerified';
import ConfirmedEmail from './../containers/ConfirmedEmail';

import { tsImportEqualsDeclaration } from '@babel/types';


const RouterWithRedux = connect()(Router);

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            isStorageLoaded: false
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            this.setState({
                token: token !== null,
                isStorageLoaded: true
            })
        });
    }

    render() {
        let { isLogged } = this.props.login;
        let { token, isStorageLoaded } = this.state;
        if (!isStorageLoaded) {
            return (
                <Loader loading={true} />
            )
        } else {
            return (
                <RouterWithRedux>
                    <Scene key='root'>
                        <Scene
                            component={Splash}
                            initial={true}
                            hideNavBar={true}
                            key='Splash'
                            title='Splash'
                        />
                        <Scene
                            component={SignupType}
                            initial={false}
                            hideNavBar={true}
                            key='SignupType'
                            title='SignupType'
                        />
                        <Scene
                            component={SignupCustomer}
                            initial={false}
                            hideNavBar={true}
                            key='SignupCustomer'
                            title='SignupCustomer'
                        />
                        <Scene
                            component={Login}
                            initial={false}
                            hideNavBar={true}
                            key='Login'
                            title='Login'
                        />
                         <Scene
                            component={ResetPassword}
                            initial={false}
                            hideNavBar={true}
                            key='ResetPassword'
                            title='ResetPassword'
                        />
                          <Scene
                            component={ChangePassword}
                            initial={false}
                            hideNavBar={true}
                            key='ChangePassword'
                            title='ChangePassword'
                        />
                         <Scene
                            component={ConfirmedEmail}
                            initial={false}
                            hideNavBar={true}
                            key='ConfirmedEmail'
                            title='ConfirmedEmail'
                        />
                          <Scene
                            component={AccountVerified}
                            initial={false}
                            hideNavBar={true}
                            key='AccountVerified'
                            title='AccountVerified'
                        />
                        <Scene
                            component={Homepage}
                            initial={false}
                            hideNavBar={true}
                            key='Homepage'
                            title='Homepage'
                        />
                        <Scene
                            component={Aboutapp}
                            initial={false}
                            hideNavBar={true}
                            key='Aboutapp'
                            title='Aboutapp'
                        />
                        <Scene
                            component={Notification}
                            initial={false}
                            hideNavBar={true}
                            key='Notification'
                            title='Notification'
                        />
                        <Scene
                            component={Livefeed}
                            initial={false}
                            hideNavBar={true}
                            key='Livefeed'
                            title='Livefeed'
                        />
                        <Scene
                            component={Promodetails}
                            initial={false}
                            hideNavBar={true}
                            key='Promodetails'
                            title='Promodetails'
                        />
                        <Scene
                            component={Termsandconditions}
                            initial={false}
                            hideNavBar={true}
                            key='Termsandconditions'
                            title='Termsandconditions'
                        />
                        <Scene
                            component={Privacypolicy}
                            initial={false}
                            hideNavBar={true}
                            key='Privacypolicy'
                            title='Privacypolicy'
                        />
                        <Scene
                            component={Settings}
                            initial={false}
                            hideNavBar={true}
                            key='Settings'
                            title='Settings'
                        />
                        <Scene
                            component={Searchandfilter}
                            initial={false}
                            hideNavBar={true}
                            key='Searchandfilter'
                            title='Searchandfilter'
                        />
                           <Scene
                            component={Subcategory}
                            initial={false}
                            hideNavBar={true}
                            key='Subcategory'
                            title='Subcategory'
                        />
                           <Scene
                            component={Barpage}
                            initial={false}
                            hideNavBar={true}
                            key='Barpage'
                            title='Barpage'
                        />
                           <Scene
                            component={Checkin}
                            initial={false}
                            hideNavBar={true}
                            key='Checkin'
                            title='Checkin'
                        />
                            <Scene
                            component={Pausevideo}
                            initial={false}
                            hideNavBar={true}
                            key='Pausevideo'
                            title='Pausevideo'
                        />
                           <Scene
                            component={Playvideo}
                            initial={false}
                            hideNavBar={true}
                            key='Playvideo'
                            title='Playvideo'
                        />
                           <Scene
                            component={Feedback}
                            initial={false}
                            hideNavBar={true}
                            key='Feedback'
                            title='Feedback'
                        />
                         <Scene
                            component={Mappage}
                            initial={false}
                            hideNavBar={true}
                            key='Mappage'
                            title='Mappage'
                        />
                         <Scene
                            component={Profile}
                            initial={false}
                            hideNavBar={true}
                            key='Profile'
                            title='Profile'
                        />
                         <Scene
                            component={Landingpage}
                            initial={false}
                            hideNavBar={true}
                            key='Landingpage'
                            title='Landingpage'
                        />
                         <Scene
                            component={RateApp}
                            initial={false}
                            hideNavBar={true}
                            key='RateApp'
                            title='RateApp'
                        />
                         <Scene
                            component={Repot_a_Problem}
                            initial={false}
                            hideNavBar={true}
                            key='Repot_a_Problem'
                            title='Repot_a_Problem'
                        />


                    </Scene>
                </RouterWithRedux>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
};
export default connect(mapStateToProps)(Root)
console.disableYellowBox = true