import Dashboard from './dashboard'
import { logout } from '../actions/session_actions'
import { connect } from 'react-redux'


const msp = ({session}) => ({
  currentUser: session.currentUser
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Dashboard);
