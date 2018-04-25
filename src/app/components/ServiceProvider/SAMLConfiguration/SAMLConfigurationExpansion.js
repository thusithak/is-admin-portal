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
import SamlConfigProfiles from "./SamlConfigProfiles";
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
        'SAML2 Web SSO Configurations',
        'Claim Configurations',
        'Role/Permission Configuration',
        'Local & Outbound Authentication Configuration',
        'Inbound Provisioning Configuration',
        'Outbound Provisioning Configuration',
    ];
}

class SAMLConfigurationExpansion extends React.Component {
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
                        <SamlConfigProfiles/>
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

SAMLConfigurationExpansion.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(SAMLConfigurationExpansion);