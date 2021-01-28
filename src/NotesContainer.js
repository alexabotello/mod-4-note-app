import React from 'react'
import NoteCard from './NoteCard'

class NotesContainer extends React.Component {

  renderNotes = () => {
    return this.props.notes.map(noteObj => {
      return <NoteCard key={noteObj.id} {...noteObj} deleteNote={this.props.deleteNote} updateNote={this.props.updateNote} addShow={this.props.addShow} /> 
    })
  }

  render(){
    console.log("notesContainer:", this.props.notes)
    return (
      <div>
      {
        this.renderNotes()
      }
      </div>
    )
  }
}

export default NotesContainer