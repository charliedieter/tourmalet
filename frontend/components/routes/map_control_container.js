import { connect } from 'react-redux'
import { saveActivity } from '../../actions/activity_actions'
import MapControl from './map_control'

const mdp = dispatch => ({
  saveActivity: (activity) => dispatch(saveActivity(activity))
})

export default connect(null, mdp)(MapControl)
