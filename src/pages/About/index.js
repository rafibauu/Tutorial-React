import React from 'react'
import { Redirect } from 'react-router-dom'

const About = (props) => {
  const [counter, setCounter] = React.useState(1)
  const { history } = props
  console.log(counter)

  if (counter === 5) {
    return <Redirect to={{ pathname: "/", state: { id: 999 } }} />
  }

  return (
    <div>
      About
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Add Counter
      </button>
      <br />
      <button onClick={() => history.push({ pathname: "/", state: { id: 12345 } })}>
        Redirect
      </button>
    </div>
  )
}

export default About
