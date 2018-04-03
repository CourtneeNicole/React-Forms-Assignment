import React, {Component} from 'react'
import {Route} from "react-router-dom"

import Login from '../Components/Login'
import PasswordReset from '../Components/PasswordReset'
import Home from '../Pages/Home'
import Register from '../Components/Register'

export default class extends Component{
  render(){
    return(
      <div>
        <Route  exact path={'/'} commponent={Home}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/reset'} component={PasswordReset}/>
        <Route path={'/register'} component={Register}/>
      </div>
    )
  }
}