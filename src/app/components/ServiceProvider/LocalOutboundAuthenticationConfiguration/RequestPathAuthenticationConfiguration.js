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
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Table, {TableBody, TableCell, TableRow} from "material-ui/Table";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";


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

});

const options = [
    'basic-auth',
    'oauth-bearer',
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
            anchorEl: null,
            selectedIndex: 1,

        }
    }

    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const { dataRequestPathAuthentication, anchorEl } = this.state;

        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.tableWrapper}>
                    <Typography gutterBottom>Request Path Authentication Configuration</Typography>
                    <Button variant="raised" onClick={this.handleAddClaimURI}>
                        Add
                    </Button>
                        <List component="nav">
                            <ListItem
                                button
                                aria-haspopup="true"
                                aria-controls="lock-menu"
                                aria-label="When device is locked"
                                onClick={this.handleClickListItem}
                            >
                                <ListItemText
                                    primary={options[this.state.selectedIndex]}
                                />
                            </ListItem>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
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
