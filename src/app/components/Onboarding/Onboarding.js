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
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Devider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';
import feature1 from '../../../images/app/feature1.jpg';
import feature2 from '../../../images/app/feature2.jpg';
import feature3 from '../../../images/app/feature3.jpg';
import feature4 from '../../../images/app/feature4.jpg';
import PageLoadingAnimation from '../Base/Loading/loading';

const styles = theme => ({
    bodyContainer: {
        padding: "80px 15% 50px 15%",
        position: "relative",
    },
    cardContent: {
        minHeight: 120,
        maxHeight: 120,
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: 300,
        paddingBottom: 12,
    },
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& a": {
            flex:1,
        },
    },
    content:{
        padding: theme.spacing.unit * 3,
    },
    backButtonMargin:{
        marginRight: theme.spacing.unit,
    }
});

class Onboarding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 100); // simulates an async action, and hides the spinner
    };

    render() {
        const {loading} = this.state;
        const {classes} = this.props;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <PageLoadingAnimation/>
            )
        }
        return (
            <div className='main-wrapper'>
                <div className={classes.bodyContainer}>
                    <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center"
                          className='headline'>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <div>
                                <Typography color="inherit" variant="headline" align="center"
                                            className={classes.onboardingTitle}>WSO2 Identity Server Admin
                                    Portal</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} alignItems="center" direction="column" justify="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant="subheading" align="center" className={classes.pageSubheading}>
                                Secure your digital business by connecting and managing multiple identities
                            </Typography>
                            <Devider/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" direction="row" justify="center">
                        <Grid item xs={6} sm={5} md={3} lg={3} xl={3}>
                            <Card className={classes.cardMargin}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={feature1}
                                    title="Feature 1"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="p" align="justify" color="textSecondary">
                                        Service Provider
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="raised" color="primary" component={Link}
                                            to="/ListServiceProvider">Start Creating</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={5} md={3} lg={3} xl={3}>
                            <Card className={classes.cardMargin}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={feature2}
                                    title="Feature 2"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="p" align="justify" color="textSecondary">
                                        Identity Provider
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="raised" color="primary" component={Link}
                                            to="/ListServiceProvider">Start Creating</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={5} md={3} lg={3} xl={3}>
                            <Card className={classes.cardMargin}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={feature3}
                                    title="Feature 3"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="p" align="justify" color="textSecondary">
                                        Some description about this feature. Consectetur adipiscing elit
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="raised" color="primary" component={Link}
                                            to="/ListServiceProvider">Start</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={5} md={3} lg={3} xl={3}>
                            <Card className={classes.cardMargin}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={feature4}
                                    title="Feature 4"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography component="p" align="justify" color="textSecondary">
                                        Some description about this feature.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="raised" color="primary" component={Link}
                                            to="/ListServiceProvider">Start</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    };
}

export default withStyles(styles)(Onboarding);
