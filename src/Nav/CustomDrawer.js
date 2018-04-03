import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class extends React.Component{
  handleClick= (match)=>{
    window.location.replace(match)}
  render(){
   return(
     <Drawer open={this.props.open}
             docked={false}
              change={this.props.change}>
       <MenuItem onClick={()=>this.handleClick('/')}>Home</MenuItem>
       <MenuItem onClick={()=>this.handleClick('/login')}>Login</MenuItem>
       <MenuItem onClick={()=>this.handleClick('/reset')}>Reset</MenuItem>
       <MenuItem onClick={()=>this.handleClick('/register')}>Register</MenuItem>
     </Drawer>
   )
 }
}