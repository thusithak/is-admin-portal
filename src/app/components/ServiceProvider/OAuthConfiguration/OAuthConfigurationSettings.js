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

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {withStyles} from "material-ui/styles";
import TextField from "material-ui/TextField";
import {FormControl, FormControlLabel, FormGroup, FormHelperText} from "material-ui/Form";
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import ContentCopy from 'material-ui-icons/ContentCopy';
import Checkbox from "material-ui/Checkbox";
import Switch from "material-ui/Switch";
import Button from "material-ui/Button";
import Collapse from "material-ui/transitions/Collapse";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import classNames from 'classnames';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    iconSmall: {
        fontSize: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
    textFieldIndent: {
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
    fullWidthSwitch: {
        width: "100%",
    },
    paper: {
        padding: theme.spacing.unit * 3,
    },
    paperBorderLeft: {
        padding: theme.spacing.unit * 3,
        borderLeft: "1px dashed",
        borderColor: theme.palette.primary.main,
    },
    dividerMarginBottom: {
        marginBottom: theme.spacing.unit * 3,
    },
    fullButton: {
        width: "100%",
    },
    staticTextField: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    expansionPanel: {
        margin: theme.spacing.unit,
    },
    clientMargin: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    clientTextField: {
        width: "100%",
    },
    iconButton: {
        height: 32,
        width: 32,
    },
    copied: {
        color: theme.palette.primary.dark
    },
    marginBottom:{
        marginBottom: theme.spacing.unit,
    }
});

class OAuthConfigurationSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AppDrawer: false,
            open: false,
            loading: true,
            copyToClipboardKeyStatus: false,
            copyToClipboardSecretStatus: false,

            grantTypeCode: true,
            grantTypeImplicit: true,
            grantTypePassword: true,
            grantTypeClientCredential: true,
            grantTypeRefreshToken: false,
            grantTypeSAML2: false,
            grantTypeIWA: false,
            grantTypeUrn: false,
            grantTypeToggle: "More Types ...",

            showMoreGrantTypes: false,
            oAuthClientKey: "3eMDLcEfrIHILtzGh0eN5gKlGyYa",
            oAuthClientSecret: "9QymwqnCWYgAUs4YPfNjHEfXRmIa",
            showOAuthClientSecret: false,

            callbackURL: "http://wso2is.local:8080/playground2/oauth2client",
            userAccessTokenExpiryTime: "3600",
            applicationAccessTokenExpiryTime: "3600",
            refreshTokenExpiryTime: "84600",

            assertionConsumerURLs: "",
            defaultAssertionConsumerURL: "",
            nameIDFormat: "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
            certificateAlias: "wso2carbon",
            responseSigningAlgorithm: "http://www.w3.org/2000/09/xmldsig#dsa-sha1",
            responseDigestAlgorithm: "http://www.w3.org/2001/04/xmldsig-more#md5",
            assertionEncryptionAlgorithm: "http://www.w3.org/2001/04/xmlenc#aes256-cbc",
            keyEncryptionAlgorithm: "http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p",
            enableResponseSigning: false,
            enableSignatureValidation: false,
            enableAssertionEncryption: false,
            enableSingleLogout: false,
            sLOResponseURL: "",
            sLORequestURL: "",
            enableAttributeProfile: false,
            enableAudienceRestriction: false,
            enableRecipientValidation: false,
            enableIdPInitiatedSSO: false,
            enableIdPInitiatedSLO: false,
            enableAssertionQueryRequestProfile: false,
            sPInitializedWebSSO: false,
            ecp: false,
            iDPDiscovery: false,
        }
    }

    //Allowed Grant Types
    handleGrantTypeCodeChange = event => {
        this.setState({grantTypeCode: event.target.checked});
    };
    handleGrantTypeImplicitChange = event => {
        this.setState({grantTypeImplicit: event.target.checked});
    };
    handleGrantTypePasswordChange = event => {
        this.setState({grantTypePassword: event.target.checked});
    };
    handleGrantTypeClientCredentialChange = event => {
        this.setState({grantTypeClientCredential: event.target.checked});
    };

    //Additional Grant Types
    handleGrantTypeRefreshTokenChange = event => {
        this.setState({grantTypeRefreshToken: event.target.checked});
    };
    handleGrantTypeSAML2Change = event => {
        this.setState({grantTypeSAML2: event.target.checked});
    };
    handleGrantTypeIWAChange = event => {
        this.setState({grantTypeIWA: event.target.checked});
    };
    handleGrantTypeUrnChange = event => {
        this.setState({grantTypeUrn: event.target.checked});
    };


    handleCallbackURLChange = event => {
        this.setState({callbackURL: event.target.value});
    };

    handleShowMoreGrantTypes = () => {
        this.setState({
            showMoreGrantTypes: !this.state.showMoreGrantTypes,
            grantTypeToggle: this.state.showMoreGrantTypes ? "More Types..." : "Less Types ...",
        });
    };

    handleAssertionConsumerURLsChange = event => {
        this.setState({
            assertionConsumerURLs: event.target.value,
        });
    };

    handleDefaultAssertionConsumerURLChange = event => {
        this.setState({
            defaultAssertionConsumerURL: event.target.value
        });
    };

    handleNameIDFormatChange = event => {
        this.setState({
            nameIDFormat: event.target.value
        });
    };

    handleCertificateAliasChange = event => {
        this.setState({
            certificateAlias: event.target.value
        });
    };

    handleSLOResponseURLChange = event => {
        this.setState({
            sLOResponseURL: event.target.value
        });
    };

    handleSLORequestURLChange = event => {
        this.setState({
            sLORequestURL: event.target.value
        });
    };

    handleResponseSigningAlgorithmChange = event => {
        this.setState({
            responseSigningAlgorithm: event.target.value
        });
    };

    handleResponseDigestAlgorithmChange = event => {
        this.setState({
            responseDigestAlgorithm: event.target.value
        });
    };

    handleAssertionEncryptionAlgorithmChange = event => {
        this.setState({
            assertionEncryptionAlgorithm: event.target.value
        });
    };

    handleEnableResponseSigningChange = event => {
        this.setState({enableResponseSigning: event.target.checked});
    };

    handleEnableSignatureValidationChange = event => {
        this.setState({enableSignatureValidation: event.target.checked});
    };

    handleEnableAssertionEncryptionChange = event => {
        this.setState({enableAssertionEncryption: event.target.checked});
    };

    handleEnableSingleLogoutChange = event => {
        this.setState({enableSingleLogout: event.target.checked});
    };

    handleEnableAttributeProfileChange = event => {
        this.setState({enableAttributeProfile: event.target.checked});
    };

    handleEnableAudienceRestrictionChange = event => {
        this.setState({enableAudienceRestriction: event.target.checked});
    };

    handleEnableRecipientValidationChange = event => {
        this.setState({enableRecipientValidation: event.target.checked});
    };

    handleEnableIdPInitiatedSSOChange = event => {
        this.setState({enableIdPInitiatedSSO: event.target.checked});
    };

    handleEnableIdPInitiatedSLOChange = event => {
        this.setState({enableIdPInitiatedSLO: event.target.checked});
    };

    handleEnableAssertionQueryRequestProfileChange = event => {
        this.setState({enableAssertionQueryRequestProfile: event.target.checked});
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({showOAuthClientSecret: !this.state.showOAuthClientSecret});
    };

    handleKeyCopyChange = () => {
        this.setState({copyToClipboardKeyStatus: true});
        setTimeout(() => {
            this.setState({copyToClipboardKeyStatus: false});
        }, 1000);
    };

    handleSecretCopyChange = () => {
        this.setState({copyToClipboardSecretStatus: true});
        setTimeout(() => {
            this.setState({copyToClipboardSecretStatus: false});
        }, 1000);
    };


    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.expansionPanel}>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Allowed Grant Types</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.grantTypeCode}
                                                    onChange={this.handleGrantTypeCodeChange}
                                                    value="grantTypeCode"
                                                    color="primary"
                                                />
                                            }
                                            label="Code"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.grantTypeImplicit}
                                                    onChange={this.handleGrantTypeImplicitChange}
                                                    value="grantTypeImplicit"
                                                    color="primary"
                                                />
                                            }
                                            label="Implicit"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.grantTypePassword}
                                                    onChange={this.handleGrantTypePasswordChange}
                                                    value="grantTypePassword"
                                                    color="primary"
                                                />
                                            }
                                            label="Password"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.grantTypeClientCredential}
                                                    onChange={this.handleGrantTypeClientCredentialChange}
                                                    value="grantTypeClientCredential"
                                                    color="primary"
                                                />
                                            }
                                            label="Client Credential"
                                        />
                                    </FormGroup>
                                    <Collapse in={this.state.showMoreGrantTypes}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.grantTypeRefreshToken}
                                                        onChange={this.handleGrantTypeRefreshTokenChange}
                                                        value="grantTypeRefreshToken"
                                                        color="primary"
                                                    />
                                                }
                                                label="Refresh Token"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.grantTypeSAML2}
                                                        onChange={this.handleGrantTypeSAML2Change}
                                                        value="grantTypeImplicit"
                                                        color="primary"
                                                    />
                                                }
                                                label="SAML 2"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.grantTypeIWA}
                                                        onChange={this.handleGrantTypeIWAChange}
                                                        value="grantTypePassword"
                                                        color="primary"
                                                    />
                                                }
                                                label="IWA-NTLM"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.grantTypeUrn}
                                                        onChange={this.handleGrantTypeUrnChange}
                                                        value="grantTypeClientCredential"
                                                        color="primary"
                                                    />
                                                }
                                                label="urn:ietf:params:oauth:grant-type:jwt-bearer"
                                            />
                                        </FormGroup>
                                    </Collapse>
                                    <Divider className={classes.marginBottom}/>
                                    <Button className={classes.button} onClick={this.handleShowMoreGrantTypes}>
                                        {this.state.grantTypeToggle}
                                    </Button>
                                </FormControl>
                                <FormControl>
                                    <FormGroup>

                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl className={classNames(classes.clientMargin, classes.clientTextField)}>
                                    <InputLabel htmlFor="oAuthClientKey">OAuth Client Key</InputLabel>
                                    <Input
                                        readOnly
                                        id="oAuthClientKey"
                                        value={this.state.oAuthClientKey}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <CopyToClipboard text={this.state.oAuthClientKey}
                                                                 onCopy={this.handleKeyCopyChange}>
                                                    <IconButton aria-label="Copy To Clipboard">
                                                        <ContentCopy className={classes.iconSmall}/>
                                                    </IconButton>
                                                </CopyToClipboard>
                                            </InputAdornment>
                                        }

                                    />
                                    {this.state.copyToClipboardKeyStatus ?
                                        <Typography className={classes.copied}>Copied.</Typography>
                                        : null}
                                </FormControl>
                                <FormControl className={classNames(classes.clientMargin, classes.clientTextField)}>
                                    <InputLabel htmlFor="adornment-password">OAuth Client Secret</InputLabel>
                                    <Input
                                        readOnly
                                        id="oAuthClientSecret"
                                        type={this.state.showOAuthClientSecret ? 'text' : 'password'}
                                        value={this.state.oAuthClientSecret}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Show / Hide Secret"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                >
                                                    {this.state.showOAuthClientSecret ? <VisibilityOff /> :
                                                        <Visibility />}
                                                </IconButton>
                                                <CopyToClipboard text={this.state.oAuthClientSecret}
                                                                 onCopy={this.handleSecretCopyChange}>
                                                    <IconButton aria-label="Copy To Clipboard">
                                                        <ContentCopy className={classes.iconSmall}/>
                                                    </IconButton>
                                                </CopyToClipboard>
                                            </InputAdornment>
                                        }
                                    />
                                    {this.state.copyToClipboardSecretStatus ?
                                        <Typography className={classes.copied}>Copied.</Typography> : null}
                                </FormControl>
                                <Button variant="raised" color="primary" className={classes.button}>
                                    Regenerate Secret
                                </Button>
                                <Button variant="raised" className={classes.button}>
                                    Revoke
                                </Button>
                                <div className={classes.staticTextField}>
                                    <Typography variant="body1">https://localhost:9443/oauth2/authorize</Typography>
                                    <FormHelperText>Authorization Endpoint URL</FormHelperText>
                                </div>
                                <div className={classes.staticTextField}>
                                    <Typography variant="body1">https://localhost:9443/oauth2/token</Typography>
                                    <FormHelperText>Token Endpoint URL</FormHelperText>
                                </div>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Some Title</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={0} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <TextField
                                    required
                                    id="callbackURL"
                                    label="Callback URL"
                                    className={classes.textField}
                                    value={this.state.callbackURL}
                                    onChange={this.handleCallbackURLChange}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Resource Types</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>PKCE Options</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableResponseSigning}
                                                    onChange={this.handleEnableResponseSigningChange}
                                                    value="enableResponseSigning"
                                                    color="primary"
                                                />
                                            }
                                            label="PKCE Mandatory"
                                            className={classes.fullWidthSwitch}
                                        />
                                        <FormHelperText>Only allow applications that bear PKCE Code Challenge with
                                            them.</FormHelperText>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableSignatureValidation}
                                                    onChange={this.handleEnableSignatureValidationChange}
                                                    value="enableSignatureValidation"
                                                    color="primary"
                                                />
                                            }
                                            label="Support PKCE 'Plain' Transform Algorithm"
                                            className={classes.fullWidthSwitch}
                                        />
                                        <FormHelperText>Server supports 'S256' PKCE tranformation algorithm by
                                            default.</FormHelperText>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Options</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAudienceRestriction}
                                                    onChange={this.handleEnableAudienceRestrictionChange}
                                                    value="enableAudienceRestriction"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Audience Restriction"
                                            className={classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableAudienceRestriction}>
                                            <TextField
                                                required
                                                id="audience"
                                                label="Audience"
                                                className={classes.textField}
                                                onChange={this.handleAudienceChange}
                                                margin="normal"
                                                helperText="Enable Audience Restriction to restrict the audience. You may add audience members using the Audience text box and clicking the Add button"
                                            />
                                            <Button variant="raised" className={classes.button}>
                                                Add
                                            </Button>
                                        </Collapse>
                                    </FormGroup>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableRecipientValidation}
                                                    onChange={this.handleEnableRecipientValidationChange}
                                                    value="enableRecipientValidation"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Request Object Signature Validation"
                                            className={classes.fullWidthSwitch}
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAudienceRestriction}
                                                    onChange={this.handleEnableAudienceRestrictionChange}
                                                    value="enableAudienceRestriction"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable ID Token Encryption"
                                            className={classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableAudienceRestriction}>
                                            <TextField
                                                required
                                                id="encryptionAlgorithm"
                                                label="Encryption Algorithm"
                                                className={classes.textField}
                                                onChange={this.handleAudienceChange}
                                                margin="normal"
                                            />
                                            <TextField
                                                required
                                                id="encryptionMethod"
                                                label="Encryption Method"
                                                className={classes.textField}
                                                onChange={this.handleAudienceChange}
                                                margin="normal"
                                            />
                                        </Collapse>
                                    </FormGroup>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAudienceRestriction}
                                                    onChange={this.handleEnableAudienceRestrictionChange}
                                                    value="enableAudienceRestriction"
                                                    color="primary"
                                                />
                                            }
                                            label="Role based scope validator"
                                            className={classes.fullWidthSwitch}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAudienceRestriction}
                                                    onChange={this.handleEnableAudienceRestrictionChange}
                                                    value="enableAudienceRestriction"
                                                    color="primary"
                                                />
                                            }
                                            label="XACML scope validator"
                                            className={classes.fullWidthSwitch}
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Advance Configurations</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={40} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <TextField
                                    id="userAccessTokenExpiryTime"
                                    label="User Access Token Expiry Time"
                                    className={classes.textField}
                                    value={this.state.userAccessTokenExpiryTime}
                                    onChange={this.handleUserAccessTokenExpiryTimeChange}
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">Seconds</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <TextField
                                    id="applicationAccessTokenExpiryTime"
                                    label="Application Access Token Expiry Time"
                                    className={classes.textField}
                                    value={this.state.applicationAccessTokenExpiryTime}
                                    onChange={this.handleApplicationAccessTokenExpiryTimeChange}
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">Seconds</InputAdornment>,
                                    }}
                                >
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <TextField
                                    id="refreshTokenExpiryTime"
                                    label="Refresh Token Expiry Time"
                                    className={classes.textField}
                                    value={this.state.refreshTokenExpiryTime}
                                    onChange={this.handleRefreshTokenExpiryTimeChange}
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">Seconds</InputAdornment>,
                                    }}
                                >
                                </TextField>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}
;

export default withStyles(styles)(OAuthConfigurationSettings);

