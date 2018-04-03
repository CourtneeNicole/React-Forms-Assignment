import React from "react"

import Routes from '../Config/Routes'
import Nav from '../Nav/Nav'


export default class extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <p>
          Welcome to Reactify your forms! Use the left menu icon to navigate!
        </p>
        <Routes/>
      </div>
    )
  }

}