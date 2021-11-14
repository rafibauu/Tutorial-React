import React from 'react'

const withAuth = (WrappedComponent) => {
  const auth = {
    email: 'erdecode@gmail.com',
    name: 'Erdecode Channel'
  }

  const GetUserAgent = () => {
    return window.navigator.userAgent
  }

  const colors = ['red', 'blue', 'green', 'orange', 'yellow']
  const index = Math.floor(Math.random() * 4)
  const color = colors[index]

  return (props) => {
    return (
      <div className="hoc-div" style={{ color }}>
        <WrappedComponent
          {...props}
          auth={auth}
          GetUserAgent={GetUserAgent}
          color={color}
        />
      </div>
    )
  }
}

export default withAuth
