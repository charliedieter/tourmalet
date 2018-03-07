import { signup, clearErrors } from '../actions/session_actions'
import SessionForm from './session_form'
import { connect } from 'react-redux'


const msp = state => {
  debugger
    return {formType: 'Sign Up',
    errors: state.errors.session}
}

const mdp = (dispatch, ownProps) => ({
  action: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(SessionForm)
