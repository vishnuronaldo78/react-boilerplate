import React from 'react'
import { hot } from 'react-hot-loader/root';
import { store } from '../_helpers';
import { Provider } from 'react-redux';
import { history } from  '../_helpers';
import AppRouter from  './router'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.scss'
const App = ({}) =>(
<Provider store={store}> 
    <ErrorBoundary> 
        <AppRouter history={history}/>
    </ErrorBoundary>
</Provider>
)

export default hot(App)