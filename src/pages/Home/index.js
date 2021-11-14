import React from 'react'
import withAuth from '../../hoc/withAuth'

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

const Home = (props) => {

  // const { auth, GetUserAgent, color } = props

  // console.log(props)

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

export default withAuth(Home)
