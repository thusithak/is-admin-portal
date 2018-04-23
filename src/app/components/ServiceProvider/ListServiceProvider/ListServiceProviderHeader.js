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
import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import AddIcon from "material-ui-icons/Add";
import {withStyles} from 'material-ui/styles';

const drawerWidth = 260;
const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        zIndex: theme.zIndex.drawer - 1
    },
    content: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 3,
        minWidth: 0 // So the Typography noWrap works
    },
    pageSubheading: {
        margin: "0 0 20px 0",
    },
    pageHeadline:{

    },
    iconSmall:{
        fontSize: 20,
    }
});

class ListServiceProviderHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render(){
        return(
            <Paper className={this.props.classes.content} elevation={0}>
                <Grid container spacing={0} alignItems="center" direction="column" justify="center">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="headline" className={this.props.classes.pageHeadline} align="center">
                            Service Providers
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="subheading" className={this.props.classes.pageSubheading} align="center" color="textSecondary">
                            Some text explaining why you need to configure a SP
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button className={this.props.classes.button} variant="raised" color="primary" component={Link} to='/CreateServiceProvider'>
                            <AddIcon className={this.props.classes.iconSmall}/>
                            Create New
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );

    };
};

export default withStyles(styles)(ListServiceProviderHeader);
