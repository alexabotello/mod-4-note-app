import React from 'react';
import NotesContainer from './NotesContainer'



class Homepage extends React.Component {

 render(){
   const { username } = this.props.match.params
   return (
   <div classname='grid-center'>
     <h2>Notes: {username}</h2>
     <NotesContainer notes={this.props.notes} deleteNote={this.props.deleteNote} updateNote={this.updateNote} addShow={this.props.addShow} />
   </div>
   )
 }
}

export default Homepage;