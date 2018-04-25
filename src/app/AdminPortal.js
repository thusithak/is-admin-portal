/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {getAsyncComponent} from 'async-react-component';
import {MuiThemeProvider} from 'material-ui/styles';
import Layout from '../app/components/Base/Layout/Layout';
import lightTheme from '../themes/light';

// const SignIn = () => import('./components/SignIn/SignIn');
// const Onboarding = () => import('./components/Onboarding/Onboarding');
// const ListServiceProvider = () => import('./components/ServiceProvider/ListServiceProvider/ListServiceProvider');
// const CreateServiceProvider = () => import('./components/ServiceProvider/CreateServiceProvider/CreateServiceProvider');
// const SAMLConfiguration = () => import('./components/ServiceProvider/SAMLConfiguration/SAMLConfiguration');
// const OAuthConfiguration = () => import('./components/ServiceProvider/OAuthConfiguration/OAuthConfiguration');
// const SamlConfigModeSelection = () => import('./components/ServiceProvider/SAMLConfiguration/SamlConfigModeSelection');
// const four_oh_four = () => import('./components/Error/404');

import SignIn from'./components/SignIn/SignIn';
import Onboarding from'./components/Onboarding/Onboarding';
import ListServiceProvider from'./components/ServiceProvider/ListServiceProvider/ListServiceProvider';
import CreateServiceProvider from'./components/ServiceProvider/CreateServiceProvider/CreateServiceProvider';
import SAMLConfiguration from'./components/ServiceProvider/SAMLConfiguration/SAMLConfiguration';
import OAuthConfiguration from'./components/ServiceProvider/OAuthConfiguration/OAuthConfiguration';
import SamlConfigModeSelection from'./components/ServiceProvider/SAMLConfiguration/SamlConfigModeSelection';
import four_oh_four from'./components/Error/404';

class AdminPortal extends Component {
    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this);
        this.state = {
            currentTheme: lightTheme,
            themeSwitched: false,
        };
    }

    changeTheme = (theme) => {
        this.setState({themeSwitched: theme});
        console.log(this.state.themeSwitched);
    };

    render() {
        return (
            <MuiThemeProvider theme={lightTheme}>
                <Router basename="/">
                        <Switch>
                            <Route path={"(/|/SignIn)"} component={getAsyncComponent(SignIn)}/>
                            <Layout>
                                <Route path={"/Onboarding"} component={getAsyncComponent(Onboarding)}/>
                                <Route path={"/ListServiceProvider"} component={getAsyncComponent(ListServiceProvider)}/>
                                <Route path={"/CreateServiceProvider"} component={getAsyncComponent(CreateServiceProvider)}/>
                                <Route path={"/SAMLConfiguration"} component={getAsyncComponent(SAMLConfiguration)}/>
                                <Route path={"/OAuthConfiguration"} component={getAsyncComponent(OAuthConfiguration)}/>
                                <Route path={"/SamlConfigModeSelection"} component={getAsyncComponent(SamlConfigModeSelection)}/>
                            </Layout>
                            <Route component={getAsyncComponent(four_oh_four)}></Route>
                        </Switch>
                </Router>
            </MuiThemeProvider>
        );
    };
}

export default AdminPortal;
