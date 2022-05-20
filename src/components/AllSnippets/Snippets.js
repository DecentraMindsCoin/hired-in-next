import React from 'react'

const Snippets = () => {
  return (
    
    <>
        {/* React Server Components */}
      <p>npm install next@canary react@latest react-dom@latest</p>
      {/* Yarn */}
      <p>npm install --global yarn  </p>
      {/* remove react add next, change package.json scripts to next instead of react, add .next to git ignore*/}
      <p>yarn remove react-scripts <br /> yarn add next-scripts</p>
      <p>yarn add graphql-request graphql <br /> yarn add next-scripts</p>
      
    </>
  )
}

export default Snippets
