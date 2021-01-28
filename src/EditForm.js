import React from 'react';
import { withRouter } from 'react-router-dom'

class EditForm extends React.Component {
 
    state = {
          note: this.props.showNote.note,
          content: this.props.showNote.content
    }

    handleUpdate= (e) => {
        this.setState({
            [e.target.name]: e.target.value
          })
    }
    
    handleSubmit= (e) => {
        e.preventDefault()
        this.props.updateNote(this.state)
        // this.props.history.push('/homepage')

    //     const reqObj = {
    //       method: 'PATCH',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body:  JSON.stringify({
    //         //   title: updateNoteData.title,
    //         //   content: updateNoteData.content
    //        })
    //     }
    
    
    //     fetch(`http://localhost:3001/notes/${this.props.id}`, reqObj)
    //     .then(resp => resp.json())
    //     .then(data => {
    //       this.props.updateNote(this.props.id)
    //     })
    }



  render(){
      console.log("editForm:", this.state)
      return(
        <form onSubmit={this.handleSubmit}>
        <input name='note' placeholder='note' value={this.state.note} onChange={this.handleUpdate}/>
        <input name='content' placeholder='content' value={this.state.content} onChange={this.handleUpdate}/>
         <button type='submit'>Submit</button>
        </form>
      )
    }

}


export default withRouter(EditForm);