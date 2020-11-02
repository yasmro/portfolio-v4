import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/Post'

import { grid, switcher } from 'uikit'

import NavBar from '../components/NavBar'
import Loading from '../components/Loading'

const client = require('contentful').createClient({
  space: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const WorksPage = () => {
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
      </Head>
      <NavBar />
      <div className="uk-container">
        <div className="uk-section">
        <h1 className="uk-heading-large">Works</h1>
        <div uk-grid="true" className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-small">
          <div>
            <div class="uk-card uk-card-hover uk-card-default uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-hover uk-card-default uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-hover uk-card-default uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-hover uk-card-default uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

        </div>
        {/* <ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
            <li><a href="/works/shodo">Shodo</a></li>
            <li><a href="/works/web">Web</a></li>
            <li><a href="/works/miscellenous">Miscellenous</a></li>
        </ul>

        <div class="uk-switcher uk-margin">
            <div>Hello!</div>
            <div>Hello again!</div>
            <div>Bazinga!</div>
        </div> */}
        
          {/* <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <button type="button" class="btn btn-primary">Button</button>
            </div>
          </div>
           */}
          
          <div uk-grid="true" className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-small">
            {posts.length > 0
              ? console.log((posts))
              : null}
            {posts.length > 0
              ? posts.map(p => (
                <a href="#">
                  <Post
                    alt={p.fields.alt}
                    date={p.fields.date}
                    key={p.fields.title}
                    image={p.fields.image}
                    title={p.fields.title}
                    url={p.fields.url}
                  //   category={p.fields.category.fields.name}    
                          
                  />
                </a>
                ))
              : <Loading />}

          </div>
          
        </div>
      </div>
    </>
  )
}

export default WorksPage