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
import Stepper, {Step, StepButton, StepContent} from "material-ui/Stepper";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import BasicInformation from "../BasicInformation/BasicInformation";
import OAuthConfigurationSettings from "../OAuthConfiguration/OAuthConfigurationSettings";
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
    verticalWizardButton:{
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

class OAuthConfigurationWizard extends React.Component {
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
        const {activeStep} = this.state;

        return (
            <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
                        <Step key={steps[0]}>
                            <StepButton onClick={this.handleStep(0)}
                                        completed={this.state.completed[0]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[0]}
                            </StepButton>
                            <StepContent>
                                <BasicInformation/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[1]}>
                            <StepButton onClick={this.handleStep(1)}
                                        completed={this.state.completed[1]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[1]}
                            </StepButton>
                            <StepContent>
                                <OAuthConfigurationSettings/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[2]}>
                            <StepButton onClick={this.handleStep(2)}
                                        completed={this.state.completed[2]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[2]}
                            </StepButton>
                            <StepContent>
                                <ClaimConfiguration/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[3]}>
                            <StepButton onClick={this.handleStep(3)}
                                        completed={this.state.completed[3]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[3]}
                            </StepButton>
                            <StepContent>
                                <RolePermissionConfiguration/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[4]}>
                            <StepButton onClick={this.handleStep(4)}
                                        completed={this.state.completed[4]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[4]}
                            </StepButton>
                            <StepContent>
                                <LocalOutboundAuthenticationConfiguration/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[5]}>
                            <StepButton onClick={this.handleStep(5)}
                                        completed={this.state.completed[5]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[5]}
                            </StepButton>
                            <StepContent>
                                <InboundProvisioningConfiguration/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="raised"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key={steps[6]}>
                            <StepButton onClick={this.handleStep(6)}
                                        completed={this.state.completed[6]}
                                        className={classes.verticalWizardButton}
                            >
                                {steps[6]}
                            </StepButton>
                            <StepContent>
                                <OutboundProvisioningConfiguration/>
                                <div className={classes.actionsContainer}>
                                    <Button
                                        variant="raised"
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </StepContent>
                        </Step>
                    </Stepper>
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

OAuthConfigurationWizard.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(OAuthConfigurationWizard);