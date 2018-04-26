import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import CheckIcon from 'material-ui-icons/Check';
import DotIcon from 'material-ui-icons/PanoramaFishEye';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Badge from 'material-ui/Badge';

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
    column: {
        flexBasis: '50%',
    },
    columnSecondaryHeading: {
        flexBasis: '50%',
        textAlign: "right",
    },
    secondaryHeading: {
        display: "inline-block",
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.text.secondary,
        padding: `${theme.spacing.unit / 2 - 1}px ${theme.spacing.unit}px`,
        marginLeft: theme.spacing.unit / 2,
    },
    badgeStyle: {
        "& span + span": {
            top: "-10px",
            right: "-6px",
        }
    },
    badgeStyleCheck: {
        fontSize: theme.typography.pxToRem(20),
        color: theme.palette.primary.main,
    },
    badgeStyleDot: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.primary.main,
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
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1,
            sAMLPanelCollapsed: false,
            changedSAMLPanelList: [
                {key: '1', label: 'Section 1', allFilled: true,},
                {key: '2', label: 'Section 2', allFilled: false,},
                {key: '3', label: 'Section 3', allFilled: false,},
                {key: '4', label: 'Section 4', allFilled: true,},
                {key: '5', label: 'Section 5', allFilled: false,},
            ],
            changedPanelsList: [
                {key: '1', label: 'Section 1', allFilled: true,},
                {key: '2', label: 'Section 2', allFilled: false,},
                {key: '3', label: 'Section 3', allFilled: false,},
                {key: '4', label: 'Section 4', allFilled: true,},
                {key: '5', label: 'Section 5', allFilled: false,},
            ],
        }
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

    handleSave = () => {

    };

    handleReset = () => {

    };

    handleSAMLPanelChange = (event, expanded) => {
        this.setState({
            sAMLPanelCollapsed : !expanded,
        });
        console.log(expanded);
    };

    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {changedSAMLPanelList, sAMLPanelCollapsed} = this.state;

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
                <ExpansionPanel defaultExpanded onChange={this.handleSAMLPanelChange}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading} variant="body2">{steps[1]}</Typography>
                        </div>
                        {sAMLPanelCollapsed ? (
                        <div className={classes.columnSecondaryHeading}>
                            {changedSAMLPanelList.map(n => (
                                <Badge className={classes.badgeStyle}
                                       badgeContent={n.allFilled ? <CheckIcon className={classes.badgeStyleCheck}/> :
                                           <DotIcon className={classes.badgeStyleDot}/>}
                                       key={n.key}>
                                    <Typography className={classes.secondaryHeading}
                                                component="span">{n.label}</Typography>
                                </Badge>
                            ))}
                        </div>
                        ) : null}
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