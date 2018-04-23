import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "material-ui/AppBar";
import Tabs, {Tab} from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import SAMLConfigurationWizard from "./SAMLConfigurationWizard";
import SamlConfigTabsMetadataUpload from "./SamlConfigTabsMetadataUpload";
import SamlConfigTabsMetadataUrl from "./SamlConfigTabsMetadataUrl";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

class SamlConfigTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="Manually" />
                        <Tab label="Using a Metadata File" />
                        <Tab label="Using a URL" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <SAMLConfigurationWizard/>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <SamlConfigTabsMetadataUpload/>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <SamlConfigTabsMetadataUrl/>
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

SamlConfigTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SamlConfigTabs);