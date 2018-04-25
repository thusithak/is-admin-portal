/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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

import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Crumbs from './Crumbs';
import gray from 'material-ui/colors/grey';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 3,
        background: gray[200],
        borderBottom: `1px solid ${gray[300]}`,
    },
    asdaD:{
        color:theme.palette.primary.contrastText,
    },
});

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Crumbs/>
            </div>
        );
    }
}

export default withStyles(styles)(Breadcrumbs);