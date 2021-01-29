import React from 'react';
import { withRouter } from 'react-router-dom'

class EditForm extends React.Component {
 
    state = {
          note: this.props.showNote.note,
          content: this.props.showNote.content,
          id: this.props.showNote.id
    }

    handleUpdate= (e) => {
        this.setState({
            [e.target.name]: e.target.value
          })
    }
    
    handleSubmit= (e) => {
        e.preventDefault()

        const reqObj = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body:  JSON.stringify({
              note: this.state.note,
              content: this.state.content
           })
        }
    
    
        fetch(`http://localhost:3001/notes/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          this.props.updateNote(this.state)
          this.props.history.push('/homepage')
        })
    }



  render(){
      console.log("editForm:", this.state)
      return(
        <React.Fragment>
        <div>
        <h2>
          Edit Note:
        </h2>
        </div>
          <form className='grid-center' onSubmit={this.handleSubmit}>
          <input name='note' placeholder='note' value={this.state.note} onChange={this.handleUpdate}/><br/>
          <input name='content' placeholder='content' value={this.state.content} onChange={this.handleUpdate}/>
          <button type='submit'>Submit</button>
          </form>
        </React.Fragment>
      )
    }

}


export default withRouter(EditForm);