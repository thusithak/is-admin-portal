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
import Grid from "material-ui/Grid";

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
    contentSpaceTop:{
        marginTop: theme.spacing.unit * 3,
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
        const {classes} = this.props;

        return (
            <div className={classes.contentSpaceTop}>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid container spacing={40} alignItems="flex-start" direction="row" justify="flex-start">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                required
                                id="serviceProviderName"
                                label="Service Provider Name"
                                className={classes.textField}
                                value={this.state.serviceProviderName}
                                onChange={this.handleChange('serviceProviderName')}
                                margin="dense"
                                helperText="A unique name for the service provider"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                required
                                id="description"
                                label="Description"
                                className={classes.textField}
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                margin="dense"
                                helperText="A meaningful description about the service provider"
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <TextField
                                required
                                id="applicationCertificate"
                                label="Application Certificate"
                                className={classes.textField}
                                value={this.state.applicationCertificate}
                                onChange={this.handleChange('applicationCertificate')}
                                margin="dense"
                                helperText="The certificate (in PEM format) of the application"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                                className={classes.fullWidthSwitch}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
};

export default withStyles(styles)(BasicInformation);
