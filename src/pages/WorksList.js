import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/Post'

import { grid, switcher } from 'uikit'

import NavBar from '../components/NavBar'
import Loading from '../components/Loading'

import { Link } from 'react-router-dom'

const client = require('contentful').createClient({
  space: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})
const WorksList = () => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for .`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      const allPortfolios = allPosts.filter(post => post.sys.contentType.sys.id === 'portfolio')
      console.log(allPortfolios)
      setPosts([...allPortfolios])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>

      <NavBar />
      <div className="uk-container">
        <h1 className="uk-heading">Works</h1>
        <div className="uk-section">   
          <div uk-grid="masonry: true" className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-small">
            {posts.length > 0
              ? console.log((posts))
              : null}
            {posts.length > 0
              ? posts.map((p, index) => (
                <>
                <Link to={`/works/category/${index}`}>
                  <Post
                    alt={p.fields.alt}
                    date={p.fields.date}
                    key={p.fields.title}
                    image={p.fields.thumbnail.fields.file.url}
                    title={p.fields.title}
                    width={p.fields.thumbnail.fields.file.details.image.width}
                    height={p.fields.thumbnail.fields.file.details.image.height}
                    url={p.fields.url}
                  //   category={p.fields.category.fields.name}    
                  />
                </Link>
              </>
                ))
              : <Loading ratio="3" />}
              

          </div>
          
        </div>
      </div>
    </>
  )
}

export default WorksList