import React from 'react';
import ReactDOM from 'react-dom'
import AdminPortal from "./app/AdminPortal"
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <CssBaseline/>
        <AdminPortal/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
