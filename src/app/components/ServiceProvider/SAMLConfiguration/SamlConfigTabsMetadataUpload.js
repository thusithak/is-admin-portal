import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Button from "material-ui/Button";
import FileUpload from "material-ui-icons/FileUpload";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    gridMetadata: {
        marginTop: theme.spacing.unit * 10,
    },
    rowMetadata: {
        textAlign: "center",
    },
});

function SamlConfigTabsMetadataUpload(props) {
    const {classes} = props;
    return (
        <div>
            <input
                accept="text/*"
                className={classes.input}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant="raised" color="primary" component="span" className={classes.button}>
                    Upload
                    <FileUpload className={classes.rightIcon} />
                </Button>
            </label>
        </div>
    );
}

SamlConfigTabsMetadataUpload.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SamlConfigTabsMetadataUpload);