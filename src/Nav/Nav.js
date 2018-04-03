import React from 'react'
import AppBar from 'material-ui/AppBar'

import Drawer from './Drawer'

export default class extends React.Component{
 constructor(props) {
   super(props)
   this.state = { open: false };
 }
toggleOpen = () => this.setState({ open: !this.state.open });

  render()
  {
    return(
      <div>

      <AppBar title="Reactify Your Forms"
              onLeftButtonClick={this.toggleOpen}/>
        <Drawer open={this.state.open}
                change={this.toggleOpen}/>
      </div>
    )
  }
}