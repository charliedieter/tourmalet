import React from 'react'
import { connect } from 'react-redux'
import { saveActivity } from '../../actions/activity_actions'
import { withRouter } from 'react-router'

class MapSaveModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: null,
      description: null
    }
    this.handleSave = this.handleSave.bind(this)
    this.close = this.close.bind(this)
  }

  handleSave(e) {
    e.preventDefault()
    const activity = {
      polyline: this.props.poly,
      title: this.state.title,
      description: this.state.description,
      athlete_id: this.props.currentUser.id,
      elevation: this.props.el,
      est_moving_time: this.props.time,
      distance: this.props.dist
    }
    let that = this
    this.props.saveActivity(activity)
    .then(payload => {
      debugger
      that.props.history.push(`/activities/${payload.activity.id}`)
    })

  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  close(e){
    e.preventDefault()
    this.props.close()
  }

  render() {
    return (
      <div className="modal-background">
        <div className="form-container">

          <div className="save-header"><h2>Save</h2></div>
          <form className="save-form">
            <p>Enter a title and description for your route below.</p>
            <label>Route Title (required)
              <input
                type="text"
                className="route-title-input"
                onChange={this.update('title')}
                value={this.state.title || ''}
                />
            </label>
            <label>Description
              <textarea
                className="route-description-input"
                onChange={this.update('description')}
                value={this.state.description || ''}
                />
            </label>

            <div className="buttons">
              <button className="close" onClick={this.close}>Cancel</button>
              <button className="save" onClick={this.handleSave}>Save</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
})

const mdp = dispatch => ({
  saveActivity: activity => dispatch(saveActivity(activity))
})

export default withRouter(connect(msp, mdp)(MapSaveModal))
