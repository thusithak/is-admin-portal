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
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import {FormControl, FormControlLabel, FormGroup, FormHelperText} from "material-ui/Form";
import Checkbox from "material-ui/Checkbox";
import Switch from "material-ui/Switch";
import Button from "material-ui/Button";
import Collapse from "material-ui/transitions/Collapse";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
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
    }

});
const defaultAssertionConsumerURLList = [
    {value: '1', label: 'http://localhost:8080/travelocity.com',},
    {value: '2', label: 'http://localhost:8080/travelocity.com/2',},
    {value: '3', label: 'http://localhost:8080/travelocity.com/3',},
];
const certificateAliasList = [
    {value: 'localhost', label: 'localhost',},
    {value: 'entrustclientca', label: 'entrustclientca',},
    {value: 'verisignclass3g2ca', label: 'verisignclass3g2ca',},
    {value: 'wso2carbon', label: 'wso2carbon',},
];
const responseSigningAlgorithmList = [
    {value: 'http://www.w3.org/2000/09/xmldsig#dsa-sha1', label: 'http://www.w3.org/2000/09/xmldsig#dsa-sha1',},
    {
        value: 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1',
        label: 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1',
    },
    {
        value: 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256',
        label: 'http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256',
    },
];
const responseDigestAlgorithmList = [
    {value: 'http://www.w3.org/2001/04/xmldsig-more#md5', label: 'http://www.w3.org/2001/04/xmldsig-more#md5',},
    {value: 'http://www.w3.org/2001/04/xmlenc#ripemd160', label: 'http://www.w3.org/2001/04/xmlenc#ripemd160',},
    {value: 'http://www.w3.org/2000/09/xmldsig#sha1', label: 'http://www.w3.org/2000/09/xmldsig#sha1',},
];
const assertionEncryptionAlgorithmList = [
    {value: 'http://www.w3.org/2001/04/xmlenc#aes256-cbc', label: 'http://www.w3.org/2001/04/xmlenc#aes256-cbc',},
    {value: 'http://www.w3.org/2001/04/xmlenc#aes192-cbc', label: 'http://www.w3.org/2001/04/xmlenc#aes192-cbc',},
];
const keyEncryptionAlgorithmList = [
    {
        value: 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p',
        label: 'http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p',
    },
    {value: 'http://www.w3.org/2001/04/xmlenc#rsa-1_5', label: 'http://www.w3.org/2001/04/xmlenc#rsa-1_5',},
    {value: 'http://www.w3.org/2009/xmlenc11#rsa-oaep', label: 'http://www.w3.org/2009/xmlenc11#rsa-oaep',},
];

class SamlConfigProfiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AppDrawer: false,
            open: false,
            loading: true,
            issuer: "",
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
            iSPInitializedWebSSO: false,
            ecp: false,
            iDPDiscovery: false,
        }
    }

    handleIssuerChange  = event => {
        this.setState({
            issuer: event.target.value,
        });
    };

    handleAssertionConsumerURLsChange =  event => {
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

    handleSPInitializedWebSSOChange = event => {
        this.setState({sPInitializedWebSSO: event.target.checked});
    };

    handleISPInitializedWebSSOChange = event => {
        this.setState({sPInitializedWebSSO: event.target.checked});
    };

    handleECPChange = event => {
        this.setState({ecp: event.target.checked});
    };

    handleIDPDiscoveryChange = event => {
        this.setState({iDPDiscovery: event.target.checked});
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 200); // simulates an async action, and hides the spinner
    }

    render() {
        return (
            <div className={this.props.classes.expansionPanel}>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Profiles</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.sPInitializedWebSSO}
                                                    onChange={this.handleSPInitializedWebSSOChange}
                                                    value="sPInitializedWebSSO"
                                                    color="primary"
                                                />
                                            }
                                            label="SP-Initialized Web SSO"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.iSPInitializedWebSSO}
                                                    onChange={this.handleISPInitializedWebSSOChange}
                                                    value="iSPInitializedWebSSO"
                                                    color="primary"
                                                />
                                            }
                                            label="ISP-Initialized Web SSO"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.ecp}
                                                    onChange={this.handleECPChange}
                                                    value="antoine"
                                                    color="primary"
                                                />
                                            }
                                            label="ECP"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.iDPDiscovery}
                                                    onChange={this.handleIDPDiscoveryChange}
                                                    value="antoine"
                                                    color="primary"
                                                />
                                            }
                                            label="IDP Discovery"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Button
                                    variant="raised"
                                    onClick={this.handleDownload}
                                    className={this.props.classes.fullButton}
                                >
                                    Download ISP Metadata
                                </Button>
                                <div className={this.props.classes.staticTextField}>
                                    <Typography variant="body1">https://localhost:9443/samlsso</Typography>
                                    <FormHelperText>SSO URL</FormHelperText>
                                </div>
                                <div className={this.props.classes.staticTextField}>
                                    <Typography variant="body1">https://localhost:9443/samlsso</Typography>
                                    <FormHelperText>Logout URL</FormHelperText>
                                </div>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Attribute Profiles</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FormControl component="fieldset">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.gilad}
                                                    value="gilad"
                                                    color="primary"
                                                />
                                            }
                                            label="Basic"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.jason}
                                                    value="jason"
                                                    color="primary"
                                                />
                                            }
                                            label="XACML"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.antoine}
                                                    value="antoine"
                                                    color="primary"
                                                />
                                            }
                                            label="XJOY"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.antoine}
                                                    value="antoine"
                                                    color="primary"
                                                />
                                            }
                                            label="IDP Discovery"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Manual Configs</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <TextField
                                            required
                                            id="issuer"
                                            label="Issuer"
                                            className={this.props.classes.textField}
                                            value={this.state.issuer}
                                            onChange={this.handleIssuerChange}
                                            margin="normal"
                                            helperText="Unique identifier of the service provider specified in the SAML Authentication Request"
                                        />
                                        <TextField
                                            required
                                            id="assertionConsumerURLs"
                                            label="Assertion Consumer URLs"
                                            className={this.props.classes.textField}
                                            value={this.state.assertionConsumerURLs}
                                            onChange={this.handleAssertionConsumerURLsChange}
                                            margin="normal"
                                            helperText="URL to which the browser should be redirected to after the authentication is successful"
                                        />
                                        <TextField
                                            select
                                            id="defaultAssertionConsumerURL"
                                            label="Default Assertion Consumer URL"
                                            className={this.props.classes.textField}
                                            value={this.state.defaultAssertionConsumerURL}
                                            onChange={this.handleDefaultAssertionConsumerURLChange}
                                            margin="normal"
                                            helperText="Default Assertion Consumer URL in case you are unable to retrieve it from the authentication request"
                                        >
                                            {defaultAssertionConsumerURLList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableSingleLogout}
                                                    onChange={this.handleEnableSingleLogoutChange}
                                                    value="enableSingleLogout"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Single Logout"
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableSingleLogout}>
                                            <TextField
                                                required
                                                id="sLOResponseURL"
                                                label="SLO Response URL"
                                                onChange={this.handleSLOResponseURLChange}
                                                margin="normal"
                                                helperText="Single logout response accepting endpoint"
                                            />
                                            <TextField
                                                required
                                                id="sLORequestURL"
                                                label="SLO Request URL"
                                                onChange={this.handleSLORequestURLChange}
                                                margin="normal"
                                                helperText="Single logout request accepting endpoint"
                                            />
                                        </Collapse>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Options</Typography>
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
                                            label="Enable Response Signing"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableSignatureValidation}
                                                    onChange={this.handleEnableSignatureValidationChange}
                                                    value="enableSignatureValidation"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Signature Validation in Authentication Requests and Logout Requests"
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAssertionEncryption}
                                                    onChange={this.handleEnableAssertionEncryptionChange}
                                                    value="enableAssertionEncryption"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Assertion Encryption"
                                        />
                                    </FormGroup>
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableAttributeProfile}
                                                    onChange={this.handleEnableAttributeProfileChange}
                                                    value="enableAttributeProfile"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable Attribute Profile"
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableAttributeProfile}>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={this.state.enableAttributeProfile}
                                                        onChange={this.handleEnableAttributeProfileChange}
                                                        value="enableAttributeProfile"
                                                        color="primary"
                                                    />
                                                }
                                                label="Include Attributes in the Response Always"
                                            />
                                        </Collapse>
                                    </FormGroup>

                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.enableIdPInitiatedSSO}
                                                onChange={this.handleEnableIdPInitiatedSSOChange}
                                                value="enableIdPInitiatedSSO"
                                                color="primary"
                                            />
                                        }
                                        label="Enable IdP Initiated SSO"
                                        className={this.props.classes.fullWidthSwitch}
                                    />
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.enableIdPInitiatedSLO}
                                                    onChange={this.handleEnableIdPInitiatedSLOChange}
                                                    value="enableIdPInitiatedSLO"
                                                    color="primary"
                                                />
                                            }
                                            label="Enable IdP Initiated SLO"
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableIdPInitiatedSLO}>
                                            <TextField
                                                required
                                                id="returntoURL"
                                                label="Return to URL"
                                                className={this.props.classes.textField}
                                                onChange={this.handleReturntoURLChange}
                                                margin="normal"
                                                helperText="Select this if you require validation from the recipient of the response"
                                            />
                                            <Button variant="raised" className={this.props.classes.button}>
                                                Add
                                            </Button>
                                        </Collapse>
                                    </FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.enableAssertionQueryRequestProfile}
                                                onChange={this.handleEnableAssertionQueryRequestProfileChange}
                                                value="enableAssertionQueryRequestProfile"
                                                color="primary"
                                            />
                                        }
                                        label="Enable Assertion Query Request Profile"
                                        className={this.props.classes.fullWidthSwitch}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Audience and Recipiants</Typography>
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
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableAudienceRestriction}>
                                            <TextField
                                                required
                                                id="audience"
                                                label="Audience"
                                                className={this.props.classes.textField}
                                                onChange={this.handleAudienceChange}
                                                margin="normal"
                                                helperText="Enable Audience Restriction to restrict the audience. You may add audience members using the Audience text box and clicking the Add button"
                                            />
                                            <Button variant="raised" className={this.props.classes.button}>
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
                                            label="Enable Recipient Validation"
                                            className={this.props.classes.fullWidthSwitch}
                                        />
                                        <Collapse in={this.state.enableRecipientValidation}>
                                            <TextField
                                                required
                                                id="recipient"
                                                label="Recipient"
                                                className={this.props.classes.textField}
                                                onChange={this.handleRecipientChange}
                                                margin="normal"
                                                helperText="Select this if you require validation from the recipient of the response"
                                            />
                                            <Button variant="raised" className={this.props.classes.button}>
                                                Add
                                            </Button>
                                        </Collapse>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={this.props.classes.column}>
                            <Typography className={this.props.classes.heading}>Advance Configurations</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <TextField
                                            id="nameIDFormat"
                                            label="NameID format"
                                            className={this.props.classes.textField}
                                            value={this.state.nameIDFormat}
                                            onChange={this.handleNameIDFormatChange}
                                            margin="normal"
                                            helperText="Defines the name identifier formats supported by the identity provider"
                                        />
                                        <TextField
                                            select
                                            id="certificateAlias"
                                            label="Certificate Alias"
                                            className={this.props.classes.textField}
                                            value={this.state.certificateAlias}
                                            onChange={this.handleCertificateAliasChange}
                                            margin="normal"
                                            helperText="Used to validate the signature of SAML2 requests and is used to generate encryption"
                                        >
                                            {certificateAliasList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            select
                                            required
                                            id="responseSigningAlgorithm"
                                            label="Response Signing Algorithm"
                                            className={this.props.classes.textField}
                                            value={this.state.responseSigningAlgorithm}
                                            onChange={this.handleResponseSigningAlgorithmChange}
                                            margin="normal"
                                            helperText="Specifies the SignatureMethod algorithm to be used in the Signature element in POST binding"
                                        >
                                            {responseSigningAlgorithmList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            select
                                            required
                                            id="responseDigestAlgorithm"
                                            label="Response Digest Algorithm"
                                            className={this.props.classes.textField}
                                            value={this.state.responseDigestAlgorithm}
                                            onChange={this.handleResponseDigestAlgorithmChange}
                                            margin="normal"
                                            helperText="Specifies the DigestMethod algorithm to be used in the Signature element in POST binding"
                                        >
                                            {responseDigestAlgorithmList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            select
                                            required
                                            id="assertionEncryptionAlgorithm"
                                            label="Assertion Encryption Algorithm"
                                            className={this.props.classes.textField}
                                            value={this.state.assertionEncryptionAlgorithm}
                                            onChange={this.handleAssertionEncryptionAlgorithmChange}
                                            margin="normal"
                                            helperText="TODO"
                                        >
                                            {assertionEncryptionAlgorithmList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            select
                                            required
                                            id="keyEncryptionAlgorithm"
                                            label="Key Encryption Algorithm"
                                            className={this.props.classes.textField}
                                            value={this.state.keyEncryptionAlgorithm}
                                            onChange={this.handleKeyEncryptionAlgorithmChange}
                                            margin="normal"
                                            helperText="TODO"
                                        >
                                            {keyEncryptionAlgorithmList.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}
;

export default withStyles(styles)(SamlConfigProfiles);

