import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/Post'
import NavBar from '../components/NavBar'

const client = require('contentful').createClient({
  space: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const HomePage = () => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for .`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        {/* <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        /> */}
      </Head>
      <NavBar />
      <div className="vh-100" uk-height-viewport="min-height: 600; height: 100vh;">
        <h1 className="h1">Test</h1>
      </div>

      {/* <div className="uk-container"> */}
        {/* <div className="uk-section"> */}
          {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider=""> */}

            {/* <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
              {posts.length > 0
                ? console.log((posts))
                : null}
              {posts.length > 0
                ? posts.map((p, index) => (
                  <a key={index} href="#">
                    <li class="uk-width-1-1">
                      <div class="uk-cover-container">
                        <h1>{p.fields.title}</h1>
                        <Post
                          alt={p.fields.alt}
                          date={p.fields.date}
                          key={p.fields.title}
                          image={p.fields.image}
                          title={p.fields.title}
                          url={p.fields.url}
                        //   category={p.fields.category.fields.name}    
                                
                        />
                      </div>
                    </li>
                    
                  </a>
                  ))
                : null}
                
            </ul> */}

            {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a> */}

          {/* </div> */}
        {/* </div> */}
      {/* </div> */}


      
    </>
  )
}

export default HomePage