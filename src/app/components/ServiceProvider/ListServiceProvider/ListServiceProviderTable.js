import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Table, {TableBody, TableCell, TableFooter, TablePagination, TableRow} from "material-ui/Table";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import FirstPageIcon from "material-ui-icons/FirstPage";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import LastPageIcon from "material-ui-icons/LastPage";
import EditIcon from "material-ui-icons/Edit";
import DeleteIcon from "material-ui-icons/Delete";
import Tooltip from "material-ui/Tooltip";
import ConfirmDialog from "../../Base/ConfirmDialog/ConfirmDialog";

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
    withTheme: true
})(TablePaginationActions);

let counter = 0;
function createData(name, description) {
    counter += 1;
    //let spName = name + counter;
    return { id: counter, name, description };
}

const styles = theme => ({
    root: {
        width: "100%",
    },
    table: {
        minWidth: 500
    },
    tableWrapper: {
        overflowX: "auto"
    },
    iconEdit: {
        color: theme.palette.primary.main,
    },
    iconDelete: {

    },
});

class CustomPaginationActionsTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [
                createData("Service Provider1", "Service provider 1 description"),
                createData("Service Provider2", "Nullam hendrerit dolor id mattis feugiat."),
                createData("Service Provider3", "Aenean cursus nisl at nunc congue fermentum."),
                createData("Service Provider4", "Phasellus tristique libero at ipsum bibendum luctus."),
                createData("Service Provider5", "Phasellus non ex eu eros aliquet consequat a at urna."),
                createData("Service Provider6", "Phasellus Nullam hendrerit dolor libero at ipsum bibendum luctus."),
                createData("Service Provider7", "Nullam in nisl dignissim, dignissim nisi non, faucibus neque."),
                createData("Service Provider8", "Phasellus tristique libero at ipsum bibendum luctus."),
                createData("Service Provider9", "Phasellus tristique libero at ipsum bibendum luctus. in nisl dignissim, dignissim nisi non, faucibus neque."),
                createData("Service Provider10", "dignissim nisi non, faucibus neque."),
                createData("Service Provider11", "Phasellus in nisl dignissim, dignissim nisi non, faucibus neque."),
                createData("Service Provider12", "Nullam hendrerit dolor id mattis feugiat."),
                createData("Service Provider13", "Phasellus in nisl dignissim, dignissim nisi non, faucibus neque."),
                createData("Service Provider14", "Service dignissim nisi non, faucibus neque."),
            ].sort((a, b) => (a.name < b.name ? -1 : 1)),
            page: 0,
            rowsPerPage: 5
        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { data, rowsPerPage, page } = this.state;
        const emptyRows =
            rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <div>
                <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table}>
                            <TableBody>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(n => {
                                        return (
                                            <TableRow key={n.id}>
                                                <TableCell>{n.name}</TableCell>
                                                <TableCell>{n.description}</TableCell>
                                                <TableCell numeric>
                                                    <Tooltip id="tooltip-top" title="Edit" placement="top">
                                                        <IconButton aria-label="Edit" onClick={this.handleDialogOpen}>
                                                            <EditIcon className={classes.iconEdit}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip id="tooltip-top" title="Delete" placement="top">
                                                        <IconButton aria-label="Delete" onClick={this.handleDialogOpen}>
                                                            <DeleteIcon className={classes.iconDelete}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 48 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        colSpan={3}
                                        count={data.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        Actions={TablePaginationActionsWrapped}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </Paper>
                <ConfirmDialog/>
            </div>
        );
    }
}

CustomPaginationActionsTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomPaginationActionsTable);
