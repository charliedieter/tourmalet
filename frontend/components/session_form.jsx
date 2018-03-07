import React from 'react'
import { Link } from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
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
    const email = (this.formType === 'Sign Up') ?
      <label> Create a Username
        <input
          type="text"
          value={this.state.username}
          onChange={this.update('email')}
          />
      </label>
      : null

    return (
      <div>
        <h2>{this.props.formType}</h2>
        {this.props.errors.length > 0 ? <li>{this.props.errors}</li> : null}
        <form onSubmit={this.handleSubmit}>
          {email}
          <label> Your Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              />
          </label>

          <label> Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}
