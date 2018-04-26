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
import Typography from "material-ui/Typography";
import yellow from 'material-ui/colors/yellow';
import WarningIcon from 'material-ui-icons/Warning';

const styles = theme => ({

    container: {
        width:"100%",
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
    alertWarning:{
        display:"flex",
        alignItems: "center",
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        backgroundColor: yellow[100],
        border: `1px solid ${yellow[600]}`,
        width: "100%",
        "& svg":{
            marginRight:theme.spacing.unit,
        },
        "& p":{
            margin:0,
        }
    },
    warningIcon:{
        color: yellow[800],
    },
});


class OutboundProvisioningConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                    <div className={classes.alertWarning}>
                        <WarningIcon className={classes.warningIcon}/>
                    <Typography gutterBottom>

                        There are no provisioning enabled identity providers defined in the system.
                    </Typography>
                    </div>
            </div>
        )
    }
};

export default withStyles(styles)(OutboundProvisioningConfiguration);
