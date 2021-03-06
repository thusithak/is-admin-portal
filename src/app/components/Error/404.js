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
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, {CardActions, CardContent} from "material-ui/Card";
import {withStyles} from "material-ui/styles";
import {Link} from "react-router-dom";

const styles = theme => ({
    bodyContainer: {
        padding: "80px 15% 50px 15%",
        position: "relative",
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: 300,
        paddingBottom: 12,
    },
    pageSubheading: {
        margin: "20px 0",
    },
    loginHeading: {
        marginTop: theme.spacing.unit * 3,
    },
    onboardingTitle: {
        margin: "20px 20px 0px 20px",
    },
    cardMargin: {
        marginTop: 40,
    },
    cardMedia: {
        height: 200,
    },
    cardActions:{
        margin: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 4,
    },
    content:{
        padding: theme.spacing.unit * 3,
    },
    backButtonMargin:{
        marginRight: theme.spacing.unit,
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});

class FourOhFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: false,
        }
    }

    handleSignInAuth = event => {
        console.log("Username:", this.state.username);
        console.log("Password:", this.state.password);
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <div className={classes.bodyContainer}>
                    <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center"
                          className='headline'>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <Typography color="inherit" variant="headline" align="center"
                                            className={classes.onboardingTitle}>WSO2 Identity Server</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" direction="row" justify="center">
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                            <Card className={classes.cardMargin}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="display4" align="center" className={classes.loginHeading}>
                                        404
                                    </Typography>
                                    <Typography variant="display1" align="center" className={classes.loginHeading}>
                                        Page Not Found
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Typography variant="button" align="center" component={Link} to='/'>
                                        Take Me Home
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
;

export default withStyles(styles)(FourOhFour);