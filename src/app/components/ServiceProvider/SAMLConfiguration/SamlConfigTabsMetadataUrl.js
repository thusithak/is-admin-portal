import React, {Component} from "react";
import {withStyles} from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

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
        marginTop: theme.spacing.unit * 4,
    },
    rowMetadata: {
        textAlign: "center",
    },
    container: {
        width:"100%",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
});

class SamlConfigTabsMetadataUrl extends Component{

    constructor(props) {
        super(props);
        this.state = {
            metadataUrl: "",
        }
    }

    handleChange = metadataUrl => event => {
        this.setState({
            [metadataUrl]: event.target.value,
        });
    };

    render(){
    return (
        <form className={this.props.classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="metadataUrl"
                label="Metadata URL"
                className={this.props.classes.textField}
                value={this.state.metadataUrl}
                onChange={this.handleChange('metadataUrl')}
                margin="normal"
                fullWidth
            />
            <Button variant="raised" color="primary" component="span" className={this.props.classes.button}>
                Create
            </Button>
        </form>
    )
    };
}


export default withStyles(styles)(SamlConfigTabsMetadataUrl);