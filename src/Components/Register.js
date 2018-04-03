import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends React.Component {
  state={
    setUsername:'',
    setEmail:'',
    setPassword: '',
    confirmPassword:'',
    firstName:'',
    lastName:'',

  }
  render()
  {
    return (
      <Paper>
        <form onSubmit={(e) => {e.preventDefault();
        console.log('first name: '+this.state.firstName +' last name: '+ this.state.firstName +
          ' username: '+this.state.setUsername +" email: "+this.state.setEmail+
          ' password: '+this.state.setPassword +" confirm password: "+this.state.confirmPassword)}}>
         First Name <TextField required='required'
                              label='firstName'
                              id='firstName'
                              onChange={(e) => this.setState(({ firstName: e.target.value }))}
                              value={this.state.firstName}/>
          <br/>
          Last Name <TextField required='required'
                              label='lastName'
                              id='lastName'
                              onChange={(e) => this.setState(({ lastName: e.target.value }))}
                              value={this.state.lastName}/>
          <br/>
          Username <TextField required='required'
                              label='username'
                              id='setUsername'
                              onChange={(e) => this.setState(({ setUsername: e.target.value }))}
                              value={this.state.resetUsername}/>
          <br/>
          Email <TextField required='required'
                           label='email'
                           id='setEmail'
                           onChange={(e) => this.setState(({ setEmail: e.target.value }))}
                           value={this.state.setEmail}/>
          <br/>
          Password <TextField required='required'
                           label='password'
                           id='setPassword'
                              type="password"
                           onChange={(e) => this.setState(({ setPassword: e.target.value }))}
                           value={this.state.setPassword}/>
          <br/>
          Confirm Password <TextField required='required'
                           label='confirmPassword'
                                      type="password"
                           id='confirmPassword'
                           onChange={(e) => this.setState(({ confirmPassword: e.target.value }))}
                           value={this.state.confirmPassword}/>
          <br/>
          <RaisedButton type="submit" label='Register'/>
        </form>
      </Paper>
    )
  }
}

