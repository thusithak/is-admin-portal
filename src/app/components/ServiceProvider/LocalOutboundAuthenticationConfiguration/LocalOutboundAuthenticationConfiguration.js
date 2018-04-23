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

import React, {Component} from "react";

import {withStyles} from "material-ui/styles";
import Radio, {RadioGroup} from "material-ui/Radio";
import Collapse from "material-ui/transitions/Collapse";
import Switch from 'material-ui/Switch';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import LocalAuthenticationSelect from "../LocalOutboundAuthenticationConfiguration/LocalAuthenticationSelect";
import AdvanceConfigurationSelect from "../LocalOutboundAuthenticationConfiguration/AdvanceConfigurationSelect";
import RequestPathAuthenticationConfiguration from "../LocalOutboundAuthenticationConfiguration/RequestPathAuthenticationConfiguration";


const styles = theme => ({
    checkboxGroup: {
        marginTop: theme.spacing.unit * 3,
    },
    fullWidthSwitch:{
        width:"100%",
    }

});

class LocalOutboundAuthenticationConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            authenticationType: "default",
            showLocalAuthenticationSelect: false,
            showAdvanceConfigurationSelect: false,
            assertIdentity: false,
            alwaysSend: false,
            useTenantDomain: false,
            useUserStoreDomain: false,
            enableAuthorization: false,

        }
    }

    handleAuthenticationTypeChange = event => {
        this.setState({authenticationType: event.target.value,});
        this.setState({showLocalAuthenticationSelect: false});
        this.setState({showAdvanceConfigurationSelect: false});
    };

    handleshowLocalAuthenticationSelect = event => {
        this.setState({authenticationType: event.target.value,});
        this.setState({showLocalAuthenticationSelect: true});
        this.setState({showAdvanceConfigurationSelect: false});
    };

    handleshowAdvanceConfigurationSelect = event => {
        this.setState({authenticationType: event.target.value,});
        this.setState({showLocalAuthenticationSelect: false});
        this.setState({showAdvanceConfigurationSelect: true});
    };

    handleAssertIdentityChange = event => {
        this.setState({assertIdentity: event.target.checked});
    };
    handleAlwaysSendChange = event => {
        this.setState({alwaysSend: event.target.checked});
    };
    handleUseTenantDomainChange = event => {
        this.setState({useTenantDomain: event.target.checked});
    };
    handleUseUserStoreDomainChange = event => {
        this.setState({useUserStoreDomain: event.target.checked});
    };

 handleEnableAuthorizationChange = event => {
        this.setState({enableAuthorization: event.target.checked});
    };


    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {

        return (
            <div>
                <RadioGroup
                    checked={this.state.authenticationType === 'default'}
                    aria-label="Authentication Type"
                    name="authenticationType"
                    className={this.props.classes.group}
                    value={this.state.authenticationType}
                    onChange={this.handleAuthenticationTypeChange}
                >
                    <FormControlLabel value="default" control={<Radio color="primary"/>}
                                      label="Default"/>
                </RadioGroup>
                <RadioGroup
                    aria-label="Authentication Type"
                    name="authenticationType"
                    className={this.props.classes.group}
                    value={this.state.authenticationType}
                    onChange={this.handleshowLocalAuthenticationSelect}
                >
                    <FormControlLabel value="localAuthentication" control={<Radio color="primary"/>}
                                      label="Local Authentication"/>
                </RadioGroup>
                <Collapse in={this.state.showLocalAuthenticationSelect}>
                    <LocalAuthenticationSelect/>
                </Collapse>
                <RadioGroup
                    aria-label="Authentication Type"
                    name="authenticationType"
                    className={this.props.classes.group}
                    value={this.state.authenticationType}
                    onChange={this.handleAuthenticationTypeChange}
                >
                    <FormControlLabel value="federatedAuthentication" control={<Radio color="primary"/>}
                                      label="Federated Authentication" disabled/>
                </RadioGroup>
                <RadioGroup
                    aria-label="Authentication Type"
                    name="authenticationType"
                    className={this.props.classes.group}
                    value={this.state.authenticationType}
                    onChange={this.handleshowAdvanceConfigurationSelect}
                >
                    <FormControlLabel value="advancedConfiguration" control={<Radio color="primary"/>}
                                      label="Advanced Configuration"/>
                </RadioGroup>
                <Collapse in={this.state.showAdvanceConfigurationSelect}>
                    <AdvanceConfigurationSelect/>
                </Collapse>

                <FormGroup row className={this.props.classes.checkboxGroup}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.assertIdentity}
                                onChange={this.handleAssertIdentityChange}
                                value="assertIdentity"
                                color="primary"
                            />
                        }
                        label="Assert identity using mapped local subject identifier"
                        className={this.props.classes.fullWidthSwitch}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.alwaysSend}
                                onChange={this.handleAlwaysSendChange}
                                value="alwaysSend"
                                color="primary"
                            />
                        }
                        label="Always send back the authenticated list of identity providers"
                        className={this.props.classes.fullWidthSwitch}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.useTenantDomain}
                                onChange={this.handleUseTenantDomainChange}
                                value="useTenantDomain"
                                color="primary"
                            />
                        }
                        label="Use tenant domain in local subject identifier"
                        className={this.props.classes.fullWidthSwitch}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.useUserStoreDomain}
                                onChange={this.handleUseUserStoreDomainChange}
                                value="useUserStoreDomain"
                                color="primary"
                            />
                        }
                        label="Use user store domain in local subject identifier"
                        className={this.props.classes.fullWidthSwitch}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.enableAuthorization}
                                onChange={this.handleEnableAuthorizationChange}
                                value="enableAuthorization"
                                color="primary"
                            />
                        }
                        label="Enable Authorization"
                        className={this.props.classes.fullWidthSwitch}
                    />

                </FormGroup>

                <RequestPathAuthenticationConfiguration/>
            </div>
        )
    }
}
;

export default withStyles(styles)(LocalOutboundAuthenticationConfiguration);
