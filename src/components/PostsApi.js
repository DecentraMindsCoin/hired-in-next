import Link from 'next/link'
import React from 'react'

const PostsApi = ({ posts }) => {
  return (
    <div>
      <main>
        {posts.map((post) => (
          <Link href={`posts/${post.id}`}>
            <a key={post.id}>
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


