import React from 'react';
import { withRouter } from 'react-router-dom'

class Show extends React.Component {

    render() {
        return(
            <div>
              {this.props.showNote.note}
              {this.props.showNote.content}
            </div>
        )
    }
}

export default withRouter(Show);