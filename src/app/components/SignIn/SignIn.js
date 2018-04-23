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
import Typography from "material-ui/Typography";
import Card, {CardActions, CardContent} from "material-ui/Card";
import Button from "material-ui/Button";
import Devider from "material-ui/Divider";
import {withStyles} from "material-ui/styles";
import {FormControl, FormGroup} from "material-ui/Form";
import TextField from "material-ui/TextField";
import Input, {InputAdornment, InputLabel} from "material-ui/Input";
import Visibility from "material-ui-icons/Visibility";
import VisibilityOff from "material-ui-icons/VisibilityOff";
import IconButton from "material-ui/IconButton";
import classNames from "classnames";
import green from "material-ui/colors/green";

const styles = theme => ({
    bodyContainer: {
        padding: "80px 15% 50px 15%",
        position: "relative",
    },
    cardContent: {

    },
    textField:{
      flexGrow:1,
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
    greenAvatar: {
        alignItems: "center",
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
    },
});

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: false,
        }
    }

    handleUserNameChange  = event => {
        this.setState({
            username: event.target.value,
        });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleSignInAuth = event => {
        console.log("Username:", this.state.username);
        console.log("Password:", this.state.password);
    };
    render(){
        const {classes} = this.props;
        return(
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
                    <Grid container spacing={0} alignItems="center" direction="column" justify="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant="subheading" align="center" className={classes.pageSubheading}>
                                Secure your digital business by connecting and managing multiple identities
                            </Typography>
                            <Devider/>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" direction="row" justify="center">
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
                            <Card className={classes.cardMargin}>
                                <CardContent className={classes.cardContent}>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
};

export default withStyles(styles)(SignIn);