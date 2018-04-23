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
import Table, {TableBody, TableCell, TableHead, TableRow} from "material-ui/Table";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import IconButton from "material-ui/IconButton";
import Checkbox from "material-ui/Checkbox";
import Select from "material-ui/Select";
import Chip from "material-ui/Chip";
import Input from "material-ui/Input";

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
    iconEdit: {
        color: theme.palette.primary.main,
    },
    iconDelete: {},
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    select:{
        width:"100%",
    }

});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const localAuthenticatorNames = [
    'basic',
    'fido',
    'X509Certificate',
];

let id = 0;
function createData(name, useSubjectIdentifier, useAttributes, localAuthenticators, action) {
    id += 1;
    return {id, name, useSubjectIdentifier, useAttributes, localAuthenticators, action};
}

class AdvanceConfigurationSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            subjectClaimURI: "claimMappingDialect",
            showClaimMappingDialect: true,
            dataAuthStep: [
                createData('Step 1',),
                createData('Step 2',),
                createData('Step 3',),
            ],
            useSubjectIdentifier: true,
            useAttributes: true,
            name: [],

        }
    }

    handleChipSelectChange = event => {
        this.setState({ name: event.target.value });
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const {dataAuthStep} = this.state;
        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.tableWrapper}>
                    <Button variant="raised" onClick={this.handleAddClaimURI}>
                        Add Authentication Step
                    </Button>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Step</TableCell>
                                <TableCell>Use subject identifier</TableCell>
                                <TableCell>Use attributes</TableCell>
                                <TableCell>Local Authenticators</TableCell>
                                <TableCell numeric></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataAuthStep.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell>
                                            <Checkbox
                                                checked={this.state.useSubjectIdentifier}
                                                onChange={this.handleChange('useSubjectIdentifier')}
                                                value="useSubjectIdentifier"
                                                color="primary"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Checkbox
                                                checked={this.state.useAttributes}
                                                onChange={this.handleChange('useAttributes')}
                                                value="useAttributes"
                                                color="primary"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                multiple
                                                value={this.state.name}
                                                onChange={this.handleChipSelectChange}
                                                input={<Input id="select-multiple-chip"/>}
                                                renderValue={selected => (
                                                    <div className={this.props.classes.chips}>
                                                        {selected.map(value => <Chip key={value} label={value}
                                                                                     className={this.props.classes.chip}/>)}
                                                    </div>
                                                )}
                                                MenuProps={MenuProps}
                                                className={this.props.classes.select}
                                            >
                                                {localAuthenticatorNames.map(name => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </TableCell>
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
};

export default withStyles(styles)(AdvanceConfigurationSelect);
