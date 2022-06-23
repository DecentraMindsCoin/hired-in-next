import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.name}</h3>
      <h3>{post.username}</h3>
      <h3>{post.company.name}</h3>
      <h3>{post.phone}</h3>
    </div>
  )
}

export default Post

export const getStaticProps = async ({ params }) => {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const data = await request.json()
  return {
    props: { post: data },
  }
}

//creates a dynamic paths for all the posts
export async function getStaticPaths() {
  const request = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await request.json()
  const paths = data.map((post) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: false }
}
