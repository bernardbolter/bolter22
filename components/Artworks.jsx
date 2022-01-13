import React from 'react'

const Artworks = ({ posts }) => {
    // console.log(posts)
    return (
        <div className="all-artworks-container">
            <p>AllArtworks</p>
        </div>
    )
}

export default Artworks

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('http://localhost:1337/api/artworks')
//     const posts = await res.json()
//     console.log(posts)
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         posts,
//       },
//     }
//   }