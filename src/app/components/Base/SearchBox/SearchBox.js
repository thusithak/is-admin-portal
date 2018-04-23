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
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';

const baseStyles = {
    open: {
        width: 300,
        transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
    },
    closed: {
        width: 0,
        transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
    }
}

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        const textStyle = this.state.isOpen ? baseStyles.open : baseStyles.closed;
        return(
            <div>
                <IconButton aria-label="Search" onClick={this.onClick}>
                    <SearchIcon />
                </IconButton>
                <Input name='search' style={textStyle} placeholder="Search" autoFocus/>

            </div>
        );
    }
}

export default SearchBox;