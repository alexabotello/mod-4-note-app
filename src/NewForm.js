import React, { Fragment } from 'react';
import './App.css'

class NewForm extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

 
    const newNote = {...this.state}

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newNote)
    }

    fetch('http://localhost:3001/notes', reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.props.addNote(note)
      this.props.history.push("/homepage")
    }) 
  }

  render(){
    return (
      <React.Fragment>
      <h2>
        New Note:
      </h2>
      <form className='grid-center' onSubmit={this.handleSubmit}>
          <input name='note' placeholder='title' value={this.props.title} onChange={this.handleChange}/>
          <input name='content' placeholder='content' value={this.props.content} onChange={this.handleChange}/>
          <br/>
          <button type='submit'>Submit</button>
      </form>
      </React.Fragment>
    )
  }
}

export default NewForm;