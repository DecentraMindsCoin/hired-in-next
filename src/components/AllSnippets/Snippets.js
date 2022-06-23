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

// npx create-react-app@latest .
// npx create-next-app@latest .

// npx create-next-app -e with-tailwindcss test-app
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// content: [
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",
// ],
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// yarn create react-app my-app --template typescript
// yarn add typescript @types/node @types/react @types/react-dom @types/jest


// yarn add cypress start-server-and-test --dev
// yarn: yarn run cypress open
// "cy:open-only": "cypress open",
// "cy:run-only": "cypress run",
// "cy:open": "start-server-and-test dev 3000 cy:open-only",
// "cy:run": "start-server-and-test dev 3000 cy:run-only"

// yarn add @apollo/client graphql graphql-request
// import { GraphQLClient } from "graphql-request";
// url = api Endpoint graphCMS
// 
// export async function getStaticProps() {
//   const url = process.env.ENDPOINT;
//   const graphcms = new GraphQLClient(url);
//   const { components } = await graphcms.request(
//     `{
//       components {
//        ...
//       }
//     }`
//   );

//   return {
//     props: {
//       components,
//     },
//   };
// }
