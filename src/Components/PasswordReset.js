import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends React.Component {
  state={
    resetUsername:'',
    resetEmail:''
  }
    render()
    {
      return (
        <Paper>
          <form onSubmit={(e) => {e.preventDefault(); console.log('username: '+this.state.resetUsername +" email: "+this.state.resetEmail)}}>
            Username <TextField required='required'
                                label='username'
                                id='resetusername'
                                onChange={(e) => this.setState(({ resetUsername: e.target.value }))}
                                value={this.state.resetUsername}/>
            <br/>
            Email <TextField required='required'
                             label='email'
                             id='resetpassword'
                             onChange={(e) => this.setState(({ resetEmail: e.target.value }))}
                             value={this.state.resetEmail}/>
            <br/>
            <RaisedButton type="submit" label='send reset email'/>
          </form>
        </Paper>
      )
    }
}

