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
import Paper from "material-ui/Paper";
import {withStyles} from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import ArrowBackIcon from "material-ui-icons/ArrowBack";
import Typography from "material-ui/Typography";
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import List, {ListItem, ListItemText} from "material-ui/List";
import PageLoadingAnimation from "../../Base/Loading/loading";
import SamlConfigTabsMetadataUpload from "./SamlConfigTabsMetadataUpload";
import SamlConfigTabsMetadataUrl from "./SamlConfigTabsMetadataUrl";
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
    expansionRoot: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '66.66%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    configNav: {
        padding: 0,
    },
    configNavText: {
        '& h3': {
            fontSize: theme.typography.body2.fontSize
        },
    },
    content:{
        padding: theme.spacing.unit * 3,
    },
    backButtonMargin:{
        marginRight: theme.spacing.unit,
    }
});

class SamlConfigModeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            loading: true,
            expanded: null,
        }
    }

    handleDialogOpen = () => {
        this.setState({open: true});
    };

    handleDialogClose = () => {
        this.setState({open: false});
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    handleClick = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
    }

    render() {
        const {expanded, loading} = this.state;
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
                                <IconButton aria-label="Search" component={Link} to='/ListServiceProvider'>
                                    <ArrowBackIcon />
                                </IconButton>
                            </div>
                            <div className="flex-item">
                                <Typography color="inherit" variant="headline">Create New Service Provider</Typography>
                            </div>
                            <div className={classes.flexItem}>

                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="subheading" className={classes.pageSubheading}>
                            Select any of the following methods to create and configure SAML2 Web SSO...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                    <Grid item xs={12} sm={8} md={6} lg={6} xl={6}>
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Metadata File
                                    Configuration</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <SamlConfigTabsMetadataUpload/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>URL Configuration</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <SamlConfigTabsMetadataUrl/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Paper>
                            <List component="nav" className={classes.configNav}>
                                <ListItem button component={Link} to='/SAMLConfiguration'>
                                    <ListItemText primary="Manual Configuration"
                                                  className={classes.configNavText}/>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )

    }
};

export default withStyles(styles)(SamlConfigModeSelection);
