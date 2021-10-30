import React, { Component } from 'react'

class Boundary extends Component {
  state = {
    hasError: false,
    error: {}
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
  }

  render() {
    const { hasError, error } = this.state

    if (hasError) {
      return (
        <div style={{ padding: 100 }}>
          Terjadi kesalahan pada aplikasi.
          <br />
          Error name: {error.name}
          <br />
          Error message: {error.message}
        </div>
      )
    }

    return this.props.children

  }
}

export default Boundary
