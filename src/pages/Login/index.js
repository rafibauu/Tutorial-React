import React, { Component } from 'react'
import styles from './index.module.css'

export class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleFormOnChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleFormOnSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    console.log({ email, password })
  }

  render() {
    console.log('Render')
    return (
      <div>
        <form onSubmit={this.handleFormOnSubmit}>
          <div>
            <h1>Email</h1>
            <input
              type="text"
              name="email"
              id="email"
              className={styles.input}
              value={this.state.email}
              onChange={this.handleFormOnChange}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.input}
              value={this.state.password}
              onChange={this.handleFormOnChange}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
