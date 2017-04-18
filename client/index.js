import React                        from 'react'
import ReactDOM                     from 'react-dom'
import { Provider }                 from 'react-redux'
import { BrowserRouter as Router }  from 'react-router-dom'
import configureStore               from './app-logic/store/store'
const store = configureStore()

import Root from './containers/App'


ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('react'))

if (module.hot) module.hot.accept()