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
import {Link} from "react-router-dom";
import Grid from "material-ui/Grid";
import {withStyles} from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from "material-ui-icons/ArrowBack";
import Typography from "material-ui/Typography";
import ListServiceProviderHeader from "../ListServiceProvider/ListServiceProviderHeader";
import ListServiceProviderTable from "../ListServiceProvider/ListServiceProviderTable";
import PageLoadingAnimation from "../../Base/Loading/loading";
import classNames from "classnames";

const styles = theme => ({
    flexContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        '& div:nth-child(2)': {
            flex:1,
        },
    },
    pageSubheading: {
        margin: "20px 0",
    },
    content:{
        padding: theme.spacing.unit * 3,
    },
    backButtonMargin:{
        marginRight: theme.spacing.unit,
    }
});

class ListServiceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
    }

    render() {
        const {loading} = this.state;
        const {classes} = this.props;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <PageLoadingAnimation/>
            )
        }

        return (
            <div className={classes.content}>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center"
                      className='headline'>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={classes.flexContainer}>
                            <div className={classNames(classes.flexItem, classes.backButtonMargin)}>
                                <IconButton aria-label="Search" component={Link} to='/Onboarding'>
                                    <ArrowBackIcon />
                                </IconButton>
                            </div>
                            <div className={classes.flexItem}>
                                <Typography color="inherit" variant="headline">Service Providers</Typography>
                            </div>
                            <div className={classes.flexItem}>

                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ListServiceProviderHeader/>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="subheading" className={classes.pageSubheading}>
                            All the current service providers are listed below. Click on the edit action to start
                            editing a perticular SP.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ListServiceProviderTable/>
                    </Grid>
                </Grid>
            </div>
        )

    }
};

export default withStyles(styles)(ListServiceProvider);
