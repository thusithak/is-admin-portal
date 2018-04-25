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
import { MenuItem } from 'material-ui/Menu';
import Table, {TableBody, TableCell, TableRow} from "material-ui/Table";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';


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
    formControl: {
        margin: theme.spacing.unit,
        minWidth: "50%",
        maxWidth: 400,
    },

});

const options = [
    {value: '1', label: 'basic-auth',},
    {value: '2', label: 'oauth-bearer',},
];


let id = 0;
function createData(name, action) {
    id += 1;
    return { id, name, action};
}

class RequestPathAuthenticationConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            subjectClaimURI: "claimMappingDialect",
            showClaimMappingDialect: true,
            dataRequestPathAuthentication : [
                createData('BasicAuthRequestPathAuthenticator', "Delete"),
                createData('OAuthRequestPathAuthenticator', "Delete" ),
            ],
            selectedIndex: 1,
            localAuthenticator: "basic-auth",

        }
    }

    handleLocalAuthenticatorListChange = localAuthenticator => event => {
        this.setState({ [localAuthenticator]: event.target.value });
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const { dataRequestPathAuthentication } = this.state;

        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.tableWrapper}>
                    <Typography gutterBottom>Request Path Authentication Configuration</Typography>
                    <FormControl className={this.props.classes.formControl}>
                        <Select
                            value={this.state.localAuthenticator}
                            onChange={this.handleLocalAuthenticatorListChange('localAuthenticator')}
                            inputProps={{
                                name: 'localAuthenticator',
                                id: 'localAuthenticator',
                            }}
                            displayEmpty
                            label="asdasd"
                        >
                            {options.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="raised" onClick={this.handleAddClaimURI}>
                        Add
                    </Button>
                    <Table className={this.props.classes.table}>
                        <TableBody>
                            {dataRequestPathAuthentication.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell numeric>
                                            <Tooltip id="tooltip-top" title="Delete" placement="top">
                                                <IconButton aria-label="Delete" onClick={this.handleDialogOpen}>
                                                    <DeleteIcon className={this.props.classes.iconDelete}/>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}
;

export default withStyles(styles)(RequestPathAuthenticationConfiguration);
