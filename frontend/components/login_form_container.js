import { login, clearErrors } from '../actions/session_actions'
import SessionForm from './session_form'
import { connect } from 'react-redux'

const msp = state => ({
    formType: 'Log In',
    errors: state.errors.session
})

const mdp = (dispatch, ownProps) => ({
  action: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(SessionForm)
