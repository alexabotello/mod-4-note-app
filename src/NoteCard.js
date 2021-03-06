import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'

class NoteCard extends React.Component {

  handleRemove = () => {
    fetch(`http://localhost:3001/notes/${this.props.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteNote(this.props.id)
    })
  }
  
  handleUpdate = (e) => {
    const note = {id:this.props.id, note:this.props.note, content:this.props.content}
    this.props.addShow(note)
    this.props.history.push('/editForm')
  }

  handleShow = () => {
    const note = {id:this.props.id, note:this.props.note, content:this.props.content}
    this.props.addShow(note)
    this.props.history.push('/show')
  }

 render(){
   return (
     <React.Fragment>
       <section>
        <div>
          <span className='bold'>Title:</span> {this.props.note}
          <br/>
          <span className='bold'>Note:</span> {this.props.content}
        </div>
        <div id={this.props.id}>
         <button onClick={this.handleShow}>
            View
          </button>
          <button onClick={this.handleUpdate}>
            Edit
          </button>
          <button onClick={this.handleRemove}>
            Remove
          </button>
        </div>
        </section>
      </React.Fragment>
   )
 }
}

export default withRouter(NoteCard);