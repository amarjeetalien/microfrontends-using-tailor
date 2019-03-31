import * as React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ forceRefresh: true });

render(<Router history={history}><Header/></Router>, document.getElementById('header'))
