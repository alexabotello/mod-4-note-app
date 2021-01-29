import React from 'react';
import { withRouter, Link } from 'react-router-dom'

class Show extends React.Component {

    render() {
        return(
            <React.Fragment>
            <div>
                <h2>Note:</h2>
            </div>
            <div>
            <span className='bold'>Title:</span> {this.props.showNote.note}
            <br/>
            <span className='bold'>Note:</span> {this.props.showNote.content}
            </div>
            <br />
            <button className='margin1'>
                <Link to='/homepage'>
                    Back To Homepage
                </Link>
            </button>
            </React.Fragment>
        )
    }
}

export default withRouter(Show);