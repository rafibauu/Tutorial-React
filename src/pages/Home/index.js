import React from 'react'

const Home = (props) => {
  console.log(props)
  const { state } = props.location

  if (state) {
    console.log("You have a state from router, ", state)
  }

  return (
    <div>
      Home
    </div>
  )
}

export default Home
