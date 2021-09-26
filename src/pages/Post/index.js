import React from 'react'

import DataPost from '../../data/post'

const Post = (props) => {
  const { params } = props.match
  const { id, slug } = params
  console.log(params)

  const post = DataPost.find((item) => item.slug === slug && item.id === Number(id))

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
