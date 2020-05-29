import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './i18n/i18n'
import Preloader from './Component/Common/Preloader/Preloader';

ReactDOM.render(
    <BrowserRouter>
    <Suspense fallback={(<Preloader/>)}>
        <App />
        </Suspense>
    </BrowserRouter>,
  document.getElementById('root')
);

