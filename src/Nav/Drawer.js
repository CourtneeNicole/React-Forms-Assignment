import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class extends React.Component{
 render(){
   const handleClick= (match)=>{
     window.location.replace(match)
   }
   return(
     <Drawer open={this.props.open}
              onClick={this.props.change}>
       <MenuItem onClick={()=>handleClick('/')}>Home</MenuItem>
       <MenuItem onClick={()=>handleClick('/login')}>Login</MenuItem>
       <MenuItem onClick={()=>handleClick('/reset')}>Reset</MenuItem>
     </Drawer>
   )
 }
}