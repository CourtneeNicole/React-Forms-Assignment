import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends React.Component{
  state= {
    username:'',
    password: ''
  }
  render() {

    return(
      <Paper>
        <form onSubmit={(e)=>{e.preventDefault(); console.log('username: '+this.state.username+' password: '+this.state.password)}}>
          Username <TextField required='required'
                              label='username'
                              id='username'
                              onChange={(e)=>this.setState(({username: e.target.value}))}/>
          <br/>
          Password <TextField required='required'
                              type='password'
                              label='password'
                              id='password'
                              onChange={(e)=>this.setState(({password:e.target.value}))}/>
          <br/>
          <RaisedButton type="submit" label='submit'/>
        </form>
      </Paper>
    )
  }

}