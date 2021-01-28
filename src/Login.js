import React from 'react'

class Login extends React.Component {
 
  state = {
      username: ''
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/notes/1')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
      const { username } = this.state


      this.props.history.push(`/homepage/${username}`)
    })
  }

 render(){
   return (
   <form onSubmit={this.handleLogin}>
     <input type='text' value={this.state.username} onChange={this.handleChange}/>
     <input type='submit' />
   </form>
   )
 }
}

export default Login