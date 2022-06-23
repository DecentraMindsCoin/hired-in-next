import React, {useState, useEffect} from 'react'

const CSRPosts = () => {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await request.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
export default CSRPosts
