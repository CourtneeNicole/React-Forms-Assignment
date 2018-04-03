import React from 'react'
import AppBar from 'material-ui/AppBar'

import CustomDrawer from './CustomDrawer'

export default class extends React.Component{
  state = {
    open: false
  }
  
 toggleOpen = () => this.setState({ open: !this.state.open})


  render()
  {
    return(
      <div>

      <AppBar title="Reactify Your Forms"
              onLeftIconButtonClick={this.toggleOpen}/>
        <CustomDrawer open={this.state.open}
                change={this.toggleOpen}/>
      </div>
    )
  }
}