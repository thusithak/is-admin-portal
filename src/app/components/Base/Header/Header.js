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

import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Person from 'material-ui-icons/Person';
import Menu, {MenuItem} from 'material-ui/Menu';
import {FormControlLabel} from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import {withStyles} from 'material-ui/styles';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import SettingsIcon from 'material-ui-icons/Settings';
import PermIdentityIcon from 'material-ui-icons/PermIdentity';
import AccountBoxIcon from 'material-ui-icons/AccountBox';
import ClaimsIcon from 'material-ui-icons/Receipt';
import TemplateIcon from 'material-ui-icons/Dashboard';
import UserStoreIcon from 'material-ui-icons/Store';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 260;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        //Un comment to Enable Mini Variant Drawer
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    root: {
        marginLeft: 20,
        marginRight: 12,
    },
    flex: {
        flex: 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        position: 'fixed',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    drawerHeight:{
        "& :children":{
            height:50
        }
    },
    menuList:{
        padding:0,
    }
});

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.state = {
            left: false,
            anchorEl: null,
            open: true,
        };
    }

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    handleThemeChange = event => {
        this.props.themeSwitched(event.target.checked);
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {classes, theme} = this.props;

        return (
            <div>
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="subheading" color="inherit" noWrap className={classes.flex}>
                            WSO2 Identity Server
                        </Typography>
                        <Typography variant="body1" color="inherit">
                            Admin
                        </Typography>
                        <div>

                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <Person />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>Change Password</MenuItem>
                                <MenuItem>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.themeSwitched}
                                                onChange={this.handleThemeChange}
                                                value={this.state.themeSwitched}
                                                color="primary"
                                            />
                                        }
                                        label="Dark Theme"
                                    />
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List className={classes.menuList}>
                        <ListItem button component={Link} to="/Onboarding">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button component={Link} to="/ListServiceProvider">
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Service Providers"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PermIdentityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Identity Providers"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="User Management"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemIcon>
                                <UserStoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="User Stores"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ClaimsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Claims"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemIcon>
                                <TemplateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Templates"/>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    };
}
;


export default withStyles(styles, {withTheme: true})(Header);