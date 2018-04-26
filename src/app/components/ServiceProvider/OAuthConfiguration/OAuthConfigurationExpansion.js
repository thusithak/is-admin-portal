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

import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import BasicInformation from "../BasicInformation/BasicInformation";
import OAuthConfigurationSettings from "./OAuthConfigurationSettings";
import ClaimConfiguration from "../ClaimConfiguration/ClaimConfiguration";
import RolePermissionConfiguration from "../RolePermissionConfiguration/RolePermissionConfiguration";
import LocalOutboundAuthenticationConfiguration from "../LocalOutboundAuthenticationConfiguration/LocalOutboundAuthenticationConfiguration";
import InboundProvisioningConfiguration from "../InboundProvisioningConfiguration/InboundProvisioningConfiguration";
import OutboundProvisioningConfiguration from "../OutboundProvisioningConfiguration/OutboundProvisioningConfiguration";

const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 2,
    },
    verticalWizardButton: {
        justifyContent: "start",
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return [
        'Basic Information',
        'OAuth/OpenID Connect Configuration',
        'Claim Configurations',
        'Role/Permission Configuration',
        'Local & Outbound Authentication Configuration',
        'Inbound Provisioning Configuration',
        'Outbound Provisioning Configuration',
    ];
}

class OAuthConfigurationExpansion extends React.Component {
    state = {
        activeStep: 1,
        completed: {},
    };

    completedSteps() {
        return Object.keys(this.state.completed).length;
    }

    totalSteps = () => {
        return getSteps().length;
    };

    isLastStep() {
        return this.state.activeStep === this.totalSteps() - 1;
    }

    allStepsCompleted() {
        return this.completedSteps() === this.totalSteps();
    }

    handleNext = () => {
        let activeStep;

        if (this.isLastStep() && !this.allStepsCompleted()) {
            // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            const steps = getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleSave = () => {

    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };

    render() {
        const {classes} = this.props;
        const steps = getSteps();

        return (
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[0]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <BasicInformation/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel defaultExpanded>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[1]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <OAuthConfigurationSettings/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[2]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ClaimConfiguration/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[3]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <RolePermissionConfiguration/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[4]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <LocalOutboundAuthenticationConfiguration/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[5]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <InboundProvisioningConfiguration/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="body2">{steps[6]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <OutboundProvisioningConfiguration/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <Paper square className={classes.resetContainer}>
                    <Typography gutterBottom color="textSecondary">You can save your progress any time...</Typography>
                    <Button onClick={this.handleReset} className={classes.button}>
                        Reset
                    </Button>
                    <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleSave}
                        className={classes.button}>
                        Save
                    </Button>
                </Paper>
            </div>
        );
    }
}

OAuthConfigurationExpansion.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(OAuthConfigurationExpansion);