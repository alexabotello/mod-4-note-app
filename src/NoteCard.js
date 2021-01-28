import React from 'react';
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
        <div>
          {this.props.note}
          {this.props.content}
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
      </React.Fragment>
   )
 }
}

export default withRouter(NoteCard);