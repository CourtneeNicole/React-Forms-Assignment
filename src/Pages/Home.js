import React from "react"

import Routes from '../Config/Routes'
import Nav from '../Nav/Nav'


export default class extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <Routes/>
      </div>
    )
  }

}