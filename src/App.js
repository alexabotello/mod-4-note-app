import React from 'react';
import Nav from './Nav';
import Login from './Login';
import Homepage from './Homepage';
import NewForm from './NewForm';
import EditForm from './EditForm';
import Show from './Show'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends React.Component {

  state = {
    notes: [],
    showNote: {}
  }

  componentDidMount(){
    console.log("hello")
    fetch('http://localhost:3001/notes')
    .then(resp => resp.json())
    .then(notesArr => {
      this.setState({
        notes: notesArr
      })
    })
  }

  addNote = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  deleteNote = (id) => {
    const updatedNotes = this.state.notes.filter(noteObj => noteObj.id !== id )

    this.setState({
      notes: updatedNotes
    })
  }

  updateNote = (newNote) => {
    console.log(newNote)
    let filteredArr = this.state.notes.map(note => {
      if (note.id === newNote.id){
        return newNote
      } else {return note}
    })
      this.setState({
        notes: filteredArr
      })
  }

  addShow = (note) => {
    this.setState({
      showNote: note
    })
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Nav title="FlatNote" />
  
        <Switch>
  
          <Route render={(routeParams) => {return <Homepage {...routeParams} addShow={this.addShow} notes={this.state.notes} deleteNote={this.deleteNote} />}} path='/homepage'/>
          <Route component={Login} path='/login' />
          <Route render={(routeParams) => {return <NewForm {...routeParams} addNote={this.addNote} /> }} path='/newForm' />
          <Route render= {(routeParams) => {return <EditForm {...routeParams} showNote={this.state.showNote} updateNote={this.updateNote} /> }} path='/editForm' />
          <Route render= {(routeParams) => {return <Show {...routeParams} showNote={this.state.showNote} /> }} path='/show' />
        
        </Switch>
  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

