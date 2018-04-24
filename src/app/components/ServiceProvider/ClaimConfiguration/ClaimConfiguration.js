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
import Radio, {RadioGroup} from "material-ui/Radio";
import {FormControlLabel} from "material-ui/Form";
import Collapse from "material-ui/transitions/Collapse";
import LocalClaimDialect from "./LocalClaimDialect";
import CustomClaimDialect from "./CustomClaimDialect";


const styles = theme => ({

    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        //flexDirection: "row",
    },
    contentSpaceTop:{
        marginTop: theme.spacing.unit * 3,
    },
});

class ClaimConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            selectClaimMappingDialect: "claimMappingDialect",
            showClaimMappingDialect: true,
        }
    }

    handleClaimMappingDialectChange = event => {
        this.setState({selectClaimMappingDialect: event.target.value});
        this.setState({showClaimMappingDialect: !this.state.showClaimMappingDialect});
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.contentSpaceTop}>
                <RadioGroup
                    aria-label="selectClaimMappingDialect"
                    name="selectClaimMappingDialect"
                    className={classes.group}
                    value={this.state.selectClaimMappingDialect}
                    onChange={this.handleClaimMappingDialectChange}
                >
                    <FormControlLabel value="claimMappingDialect" control={<Radio color="primary"/>}
                                      label="Use Local Claim Dialect"/>
                    <FormControlLabel value="customClaimDialect" control={<Radio color="primary"/>}
                                      label="Define Custom Claim Dialect"/>
                </RadioGroup>
                <Collapse in={this.state.showClaimMappingDialect}>
                    <LocalClaimDialect/>
                </Collapse>
                <Collapse in={!this.state.showClaimMappingDialect}>
                    <CustomClaimDialect/>
                </Collapse>
            </div>
        )
    }
}
;

export default withStyles(styles)(ClaimConfiguration);
