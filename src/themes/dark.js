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

import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import gray from 'material-ui/colors/grey';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {light: blue[300], main: blue[500], dark: blue[700]},
        error: red,
        background: {default: gray}
    },
    typography: {
        fontWeight: 300
    },
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 65,
            },
        }
    }


});

export default theme;