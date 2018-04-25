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
import Button from "material-ui/Button";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        flexDirection: "row",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
});

const subjectClaimURIList = [
    {value: '1', label: 'http://wso2.org/claims/active',},
    {value: '2', label: 'http://wso2.org/claims/addresses',},
    {value: '3', label: 'http://wso2.org/claims/addresses.formatted',},
    {value: '4', label: 'http://wso2.org/claims/addresses.locality',},
];

const roleClaimURIList = [
    {value: '1', label: 'http://wso2.org/claims/active',},
    {value: '2', label: 'http://wso2.org/claims/addresses',},
    {value: '3', label: 'http://wso2.org/claims/addresses.formatted',},
    {value: '4', label: 'http://wso2.org/claims/addresses.locality',},
];

class CustomClaimDialect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            subjectClaimURI: "",
            roleClaimURI: "",
        }
    }

    handleAddClaimURI = event => {

    };

    handleSubjectClaimURIChange = event => {
        this.setState({
            subjectClaimURI: event.target.value
        });
    };

    handleRoleClaimURIChange = event => {
        this.setState({
            roleClaimURI: event.target.value
        });
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        return (
            <div>
                <Button variant="raised" onClick={this.handleAddClaimURI}>
                    Add Claim URI
                </Button>
                <TextField
                    select
                    id="subjectClaimURI"
                    label="Subject Claim URI"
                    className={this.props.classes.textField}
                    value={this.state.subjectClaimURI}
                    onChange={this.handleSubjectClaimURIChange}
                    margin="normal"
                >
                    {subjectClaimURIList.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    id="roleClaimURI"
                    label="Role Claim URI"
                    className={this.props.classes.textField}
                    value={this.state.roleClaimURI}
                    onChange={this.handleRoleClaimURIChange}
                    margin="normal"
                    helperText="Select Claim URI for Service Provider Role"
                >
                    {roleClaimURIList.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}
;

export default withStyles(styles)(CustomClaimDialect);
