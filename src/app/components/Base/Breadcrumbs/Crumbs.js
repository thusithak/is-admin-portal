/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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

import React from 'react';
import {NavLink} from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Typography from "material-ui/Typography";

// breadcrumbs can be any type of component or string
//const UserBreadcrumb = ({match}) =>
//    <span>{match.params.userId}</span>; // use match param userId to fetch/display user name

// define some custom breadcrumbs for certain routes (optional)
const routes = [
    {path: '/', breadcrumb: "Home"},
    {path: '/Onboarding', breadcrumb: "Welcome"},
    {path: '/ListServiceProvider', breadcrumb: 'Service Provider Listing'},
    {path: '/CreateServiceProvider', breadcrumb: 'Create A Service Provider'},
    {path: '/SamlConfigModeSelection', breadcrumb: 'SAML Configuration Mode Selection'},
    {path: '/SAMLConfiguration', breadcrumb: 'SAML Configuration'},
    {path: '/OAuthConfiguration', breadcrumb: 'OAuth Configuration'},
];


// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Crumbs = ({breadcrumbs}) => (
    <div>
        <Typography>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={breadcrumb.key}>
            <NavLink to={breadcrumb.props.match.url}>
              {breadcrumb}
            </NavLink>
                    {(index < breadcrumbs.length - 1) && <i> / </i>}
          </span>
            ))}
        </Typography>
    </div>
);

export default withBreadcrumbs(routes)(Crumbs);