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
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';


const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const localAuthenticatorList = [
    {value: '1', label: 'basic',},
    {value: '2', label: 'fido',},
    {value: '3', label: 'X509Certificate',},
];

class LocalAuthenticationSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            localAuthenticator: "basic",

        }
    }

    handleLocalAuthenticatorListChange = event => {
        this.setState({ localAuthenticator: event.target.value });
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {

        return (
            <div>
                <FormControl className={this.props.classes.formControl}>
                <Select
                    value={this.state.localAuthenticator}
                    onChange={this.handleLocalAuthenticatorListChange}
                    inputProps={{
                        name: 'localAuthenticator',
                        id: 'localAuthenticator',
                    }}
                >
                    {localAuthenticatorList.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </div>
        )
    }
}
;

export default withStyles(styles)(LocalAuthenticationSelect);
