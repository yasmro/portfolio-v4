import React, { useEffect, useLayoutEffect,  useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Head from 'next/head'

import Loading from '../components/Loading'
import Post from '../components/Post'

import NavBar from '../components/NavBar'

import ReactMarkdown from 'react-markdown'
// import gfm from 'remark-gfm'

import Image from 'react-image-resizer'
import Slider from "react-slick";

import {img, spinner, grid, icon, cover, slideshow, slidenav, pagination} from 'uikit'

const client = require('contentful').createClient({
  space: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

const WorkDetail = (props) => {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for .`)
  }

  const [post, setPost] = useState({})
  const [prevId, setPrevId] = useState('0')
  const [nextId, setNextId] = useState('0')

  const [s, setS] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [length, setLength] = useState(0)

  // const movePage = (id) => {
  //   props.history.push(process.env.PUBLIC_URL + `/works/category/${id}`)
  // }

  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    touchMove: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCarouselIndex(next),
    nextArrow: <a href="#" uk-slidenav-next="true" style = {{"color": "black !important"}}></a>,
    prevArrow: <a href="#" uk-slidenav-previous="true" style = {{"color": "black !important"}}></a>,
    // appendDots: dots => (
    //   <div>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };

  useEffect(() => {
    async function getPosts() {
      setPost({})
      const allPosts = await fetchEntries()
      const allPortfolios = allPosts.filter(post => post.sys.contentType.sys.id === 'portfolio')
      console.log(allPortfolios)
      const length = allPortfolios.length
      setLength(length)
      const id = parseInt(props.match.params.id)

      setPrevId(((id - 1 + length) % length).toString())
      setNextId(((id + 1 + length) % length).toString())
      setPost(allPortfolios[id])
    }
    window.scrollTo(0, 0);
    getPosts()
    console.log(post)
    
  }, [s])

  return (
    <>
      
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      <NavBar />

      { post.fields && post !== {} ? 
      <>
      <div className="uk-container uk-container-medium uk-animation-fade">
        <div uk-grid="true" className="uk-margin-large-bottom">
          <div className="uk-width-1-3@m">
            {/* <Link to={process.env.PUBLIC_URL + `/works/category/${prevId.toString()}`}><span uk-icon="chevron-left">POST</span></Link> */}
            <span><span className="uk-text-bold">{'0' + (parseInt(props.match.params.id) + 1).toString()}</span>/{'0' + (length).toString()} </span>
            {/* <Link to={process.env.PUBLIC_URL + `/works/category/${nextId.toString()}`}><span uk-icon="chevron-right"></span></Link> */}
            <h1>{post.fields.title}</h1>
            <div className="">
              <span className="uk-label uk-background-secondary uk-margin-small-right">{post.fields.category.fields.name}</span>
              { post.fields.tags && 
                post.fields.tags.map( tag => 
                  <span className="uk-label uk-margin-small-right">{tag.fields.name}</span>
                )
              }
            </div>
            
          </div>
          <div className="uk-width-2-3@m">
            {/* <div className="uk-section"> */}
              {/* <h2 className="uk-heading-small uk-heading-bullet">{post.fields.title}</h2> */}
              <ReactMarkdown >{post.fields.description}</ReactMarkdown>
            {/* </div> */}
          </div>
        </div>
        <div>
          { post.fields.title !== "Shodo" &&
            <img
            class="w-full uk-margin"
            src={post.fields.thumbnail ? post.fields.thumbnail.fields.file.url : "https://source.unsplash.com/random/1600x900/"}
            alt="Sunset in the mountains"
            uk-img="true" />
          }
        </div>
        <div className="uk-container uk-container-xsmall">
          {
            post.fields.photos &&
            <>
              <Slider {...settings}>
                {
                  post.fields.photos.map( photo => (
                    <div>
                      <Image height={ 500 } src={photo.fields.file.url ? photo.fields.file.url : "https://source.unsplash.com/random/1600x900/"} alt="" uk-cover />
                    </div>
                  ))
                }
              </Slider>
              <div className="uk-flex-center">
                <p>{carouselIndex + 1}/{post.fields.photos.length} {post.fields.photos[carouselIndex].fields.title} {post.fields.photos[carouselIndex].fields.description}</p>
              </div>
              
              
            </>
          }
        </div>

        

          

        

        
        <ul class="uk-pagination uk-margin-bottom">
          <li><Link to={process.env.PUBLIC_URL + `/works/category/${prevId.toString()}`} onClick={ () => {window.scrollTo(0, 0); setS(s => s - 1);}}><span class="uk-margin-small-right" uk-pagination-previous></span> Previous</Link></li>
          <li class="uk-margin-auto-left"><Link to={process.env.PUBLIC_URL + `/works/category/${nextId.toString()}`} onClick={ () => {window.scrollTo(0, 0); setS(s => s + 1);}}>Next <span class="uk-margin-small-left" uk-pagination-next></span></Link></li>
        </ul>


      </div>
      </>
      : <Loading ratio="3" />}
    </>
  
  )
}

export default withRouter(WorkDetail)