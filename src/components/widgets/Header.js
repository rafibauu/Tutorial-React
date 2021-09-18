import React from 'react'

const Header = () => {
  const nameChannel = 'Selamat datang di Channel Erdecode'
  const episode = 'Episode ke 2'

  return (
    <h1>
      {nameChannel}  
      <br />
      {episode}
    </h1>
  )
}

export default Header
