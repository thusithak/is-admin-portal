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
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import Table, {TableBody, TableCell, TableRow, TableHead} from "material-ui/Table";


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

});

let id = 0;
function createData(permission, action) {
    id += 1;
    return { id, permission, action};
}
function createDataRole(role, spRole, action) {
    id += 1;
    return { id, role, spRole, action};
}

class RolePermissionConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            subjectClaimURI: "claimMappingDialect",
            showClaimMappingDialect: true,
            dataPermission : [
                createData('Permission 1', "Delete"),
                createData('Permission 2', "Delete" ),
            ],
            dataRole : [
                createDataRole('Role 1',"SP Role 1", "Delete" ),
                createDataRole('Role 2',"SP Role 2", "Delete" ),
                createDataRole('Role 3',"SP Role 3", "Delete" ),
            ]

        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const { dataPermission, dataRole } = this.state;
        const classes= this.props.classes;

        return (
            <div className={classes.container}>
                <div className={classes.tableWrapper}>
                <Button variant="raised" onClick={this.handleAddClaimURI}>
                    Add Permission
                </Button>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Permission</TableCell>
                                <TableCell numeric>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataPermission.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.permission}</TableCell>
                                        <TableCell numeric>
                                            <Tooltip id="tooltip-top" title="Delete" placement="top">
                                                <IconButton aria-label="Delete" onClick={this.handleDialogOpen}>
                                                    <DeleteIcon className={classes.iconDelete}/>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className={classes.tableWrapper}>
                <Button variant="raised" onClick={this.handleAddClaimURI}>
                    Add Role Mapping
                </Button>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Local Role</TableCell>
                                <TableCell>Service Provider Role</TableCell>
                                <TableCell numeric>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataRole.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.role}</TableCell>
                                        <TableCell>{n.spRole}</TableCell>
                                        <TableCell numeric>
                                            <Tooltip id="tooltip-top" title="Delete" placement="top">
                                                <IconButton aria-label="Delete" onClick={this.handleDialogOpen}>
                                                    <DeleteIcon className={classes.iconDelete}/>
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

export default withStyles(styles)(RolePermissionConfiguration);
