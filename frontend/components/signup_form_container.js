import { login } from '../actions/session_actions'
import SessionForm from './session_form'
import { connect } from 'react-redux'

const msp = state => ({
    formType: 'Sign Up'
})

const mdp = (dispatch, ownProps) => ({
  action: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)
