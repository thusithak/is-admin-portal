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
import Switch from 'material-ui/Switch';
import {FormControlLabel} from 'material-ui/Form';
import TextField from "material-ui/TextField";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
});

class BasicInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AppDrawer: false,
            open: false,
            loading: true,
            serviceProviderName: "",
            description: "",
            applicationCertificate: "",
        }
    }

    handleChange = serviceProviderName => event => {
        this.setState({
            [serviceProviderName]: event.target.value,
        });
    };
    handleChange = description => event => {
        this.setState({
            [description]: event.target.value,
        });
    };
    handleChange = applicationCertificate => event => {
        this.setState({
            [applicationCertificate]: event.target.value,
        });
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 200); // simulates an async action, and hides the spinner
    }

    render(){
        return (
            <div>
                <form className={this.props.classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="serviceProviderName"
                        label="Service Provider Name"
                        className={this.props.classes.textField}
                        value={this.state.serviceProviderName}
                        onChange={this.handleChange('serviceProviderName')}
                        margin="normal"
                        helperText="A unique name for the service provider"
                    />
                    <TextField
                        required
                        id="description"
                        label="Description"
                        className={this.props.classes.textField}
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        margin="normal"
                        helperText="A meaningful description about the service provider"
                        multiline
                    />
                    <TextField
                        required
                        id="applicationCertificate"
                        label="Application Certificate"
                        className={this.props.classes.textField}
                        value={this.state.applicationCertificate}
                        onChange={this.handleChange('applicationCertificate')}
                        margin="normal"
                        helperText="The certificate (in PEM format) of the application"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.saaSApplication}
                                onChange={this.handleChange('saaSApplication')}
                                value="saaSApplication"
                                color="primary"
                            />
                        }
                        label="SaaS Application"
                        className={this.props.classes.fullWidthSwitch}
                    />
                </form>
            </div>
        )
    }
};

export default withStyles(styles)(BasicInformation);
