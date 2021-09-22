import React from 'react'

const Home = (props) => {
  const { state } = props.location

  if (state.id) {
    console.log(state.id)
  }

  return (
    <div>
      Home
    </div>
  )
}

export default Home
