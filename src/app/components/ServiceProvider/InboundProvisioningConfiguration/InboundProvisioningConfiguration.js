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
import {MenuItem} from 'material-ui/Menu';
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import {FormControlLabel, FormHelperText} from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Grid from "material-ui/Grid";

const styles = theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
    table: {
        width: "100%",
    },
    tableWrapper: {
        marginTop: theme.spacing.unit * 3,
        width: "100%",
    },
    iconDelete: {},
    fullWidthSwitch: {
        width: "100%",
        marginLeft: "-5px",
    },
});

const scimInboundUserstoreList = [
    {value: '1', label: 'PRIMARY',},
    {value: '2', label: 'SECONDARY-1',},
    {value: '3', label: 'SECONDARY-2',},
];

class InboundProvisioningConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            scimInboundUserstore: "PRIMARY",
            enableDumbMode: false,

        }
    }

    handleScimInboundUserstoreChange = event => {
        this.setState({
            scimInboundUserstore: event.target.value
        });
    };

    handleEnableDumbModeChange = event => {
        this.setState({enableDumbMode: event.target.checked});
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {

        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.tableWrapper}>
                    <Typography variant="subheading" gutterBottom>SCIM Configuration</Typography>
                    <Typography gutterBottom color="textSecondary">
                        Service provider based SCIM provisioning is protected via OAuth 2.0.
                        Your service provider must have a valid OAuth 2.0 client key and a client secret to invoke the
                        SCIM API.
                        To create OAuth 2.0 key/secret : Inbound Authentication Configuration -> OAuth/OpenID Connect
                        Configuration.
                    </Typography>
                    <Grid container spacing={0} alignItems="flex-start" direction="row" justify="flex-start">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                select
                                required
                                id="scimInboundUserstore"
                                label="SCIM Inbound Userstore"
                                className={this.props.classes.textField}
                                value={this.state.scimInboundUserstore}
                                onChange={this.handleScimInboundUserstoreChange}
                                margin="normal"
                                helperText="Select userstore domain name to provision users and groups."
                            >
                                {scimInboundUserstoreList.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.enableDumbMode}
                                        onChange={this.handleEnableDumbModeChange}
                                        value="enableDumbMode"
                                        color="primary"
                                    />
                                }
                                label="Enable Dumb Mode"
                                className={this.props.classes.fullWidthSwitch}
                            />
                            <FormHelperText>Users/Groups are not provisioned to the user store. They are only outbound
                                provisioned.</FormHelperText>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
;

export default withStyles(styles)(InboundProvisioningConfiguration);
