import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
export default class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      focusedInput: null
    }
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount(nextProps) {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state)
  }

  render(){
    const username = (this.props.formType === 'Sign Up') ?
      <label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('username')}
          placeholder="   Create a Username"
          className={this.state.focusedInput === 1 ? 'focused' : ''}
          onFocus={() => this.setState({focusedInput: 1})}
          />
        {this.props.errors.username &&
        <li>Username {this.props.errors.username}</li>}
      </label>
      : null

    return (
      <div>
        <Header formType={this.props.formType} />
        <div className={this.props.formType}>
          <div className="session-box">
            <div className="form-title-box">
              <h2 className="form-head" >{this.props.formType}</h2>
            </div>
            <ul className="errors">
              {typeof this.props.errors[0] === 'string' &&
                this.props.errors.map((err, i) =>
                  <li key={i}>{err}</li>)}
            </ul>
            <form onSubmit={this.handleSubmit}>
              {username}
              <label>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="   Email"
                  className={this.state.focusedInput === 2 ? 'focused' : ''}
                  onFocus={() => this.setState({focusedInput: 2})}
                  />
                {this.props.errors.email &&
                <li>Email {this.props.errors.email}</li>}
              </label>
              <label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="   Password"
                  className={this.state.focusedInput === 3 ? 'focused' : ''}
                  onFocus={() => this.setState({focusedInput: 3})}
                  />
                {this.props.errors.password &&
                <li>Password {this.props.errors.password}</li>}
              </label>
              <div className="button-holster">
                <button>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
