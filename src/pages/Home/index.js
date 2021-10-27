import React from 'react'

const list = [
  {
    id: 1,
    name: 'Erdecode'
  },
  {
    id: 2,
    name: 'Channel'
  }
]

const Home = () => {
  return list.map((item) => {
    return (
      <React.Fragment key={item.id}>
        {item.id}
        {item.name}
        <br />
      </React.Fragment>
    )
  })
}

export default Home
