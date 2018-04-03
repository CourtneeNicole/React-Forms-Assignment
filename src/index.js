import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import Home from './Pages/Home'


const App = (
 <MuiThemeProvider>
<Router>
 <Home/>
</Router>
 </MuiThemeProvider>
)

ReactDOM.render(App, document.getElementById('root'));

