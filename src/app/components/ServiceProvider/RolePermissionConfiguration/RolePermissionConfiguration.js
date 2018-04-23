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
function createData(name, action) {
    id += 1;
    return { id, name, action};
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
                createData('Role 1', "Delete" ),
                createData('Role 2', "Delete" ),
                createData('Role 3', "Delete" ),
            ]

        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const { dataPermission, dataRole } = this.state;

        return (
            <div className={this.props.classes.container}>
                <div className={this.props.classes.tableWrapper}>
                <Button variant="raised" onClick={this.handleAddClaimURI}>
                    Add Permission
                </Button>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell numeric>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataPermission.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell numeric>{n.action}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <div className={this.props.classes.tableWrapper}>
                <Button variant="raised" onClick={this.handleAddClaimURI}>
                    Add Role Mapping
                </Button>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell numeric>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataRole.map(n => {
                                return (
                                    <TableRow key={n.id}>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell numeric>{n.calories}</TableCell>
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
