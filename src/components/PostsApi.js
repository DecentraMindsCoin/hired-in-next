import Link from 'next/link'
import React from 'react'

const PostsApi = ({ data }) => {
  return (
    <div>
      <main>
        {data.map((post) => (
          <Link key={post.id }href={`/posts/${post.id}`}>
            <a >
              <div className="pt-10">
                <h3>{post.name}</h3>
                <h3>{post.username}</h3>
                <h3>{post.email}</h3>
                <h3>{post.address.city}</h3>
              </div>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default PostsApi


