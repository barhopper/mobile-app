import React, {Component} from 'react';
import RootStack from "./src/screens/RootStack";

export default class App extends Component {
    constructor() {
        super();
        console.disableYellowBox = true;
    }

    render() {
        return (
            <RootStack/>
        );
    }
}
