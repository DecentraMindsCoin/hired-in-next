import React from 'react'

const GetStaticProps = ({ photos }) => {
  console.log(photos)
  // render code
  return (
    <div>
      <h1>photos</h1>
      <div>
        {/* <ul>
          {photos.map((photo, i) => (
            <li key={i}>
              <div>
                <h1>{photo.title}</h1>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}



// add getStaticProps() function
// export async function getStaticProps() {
//   // Get todo list from an API
//   const res = await fetch('https://jsonplaceholder.typicode.com/photos')
// const photos = await res.json()
//   return {
//     props: {
//       photos,
//     },
//   }
// }
export default GetStaticProps
// export async function getStaticProps(){
//     return {
//         props: {}
//     }
// }

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//  };
// }
