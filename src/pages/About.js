import React, { Component } from 'react';
import { motion } from "framer-motion";
import NavBar from '../components/NavBar'
// import Footer from './Footer'
// import { state as skills } from '../data/skills'


class About extends React.Component {
  constructor() {
    super();
    // this.state = skills;
    this.state = {}
  }

  componentDidMount() {
    var section = "About";
    var title = " – Yasmro's Portfolio 2020"
  }

  renderskills(skills) {
    const s = skills.map( skill =>
      // <div className="mb-4">
      <div className="mb-2">
        <dt>{skill.name}</dt>
        {/* <dd>{skill.description}</dd> */}
      </div>    
    )

    return s
  }

  render(){
    // const skills = this.state.skills.map( category =>
    //   <div className="col-lg-4 col-12 mb-3">
    //     <h4>{category.category}</h4>
    //     <dl>
    //       {this.renderskills(category.skills)}
    //     </dl>
    //   </div>    
    // )

    return(
      <>
      <NavBar />
      <div className="uk-container">
        <h1 className="uk-heading-large">About</h1>

        <div className="mt-5">
          <h2>Intro.</h2>
          <p>My name is Yu Ohno born in Nara, Japan, on 1996.</p>
          <p>I've learned Information Technology in National Information Technology, Nara College, Japan for seven years(2012 – 2019) and joined Zoho Japan corp in April 2019. I'm taking care of supporting queries from Japanese customers, developers, and reseller partners. I support in the range of ten products:  Zoho CRM (Customer Relationship Management), Zoho Campaign (which provides email marketing application), Zoho SalesIQ (which has Web visitors' tracking, live chat, and chatbot platform on the Web page), Zoho Deluge (which we can develop Zoho services' customization with low-code programming language) and API integrations.</p>
          <p>My hobby is art calligraphy and Web development. I post works of art calligraphy and Web pages to Instagram. I would like to work as an art calligrapher and/or a Web developer, and I hope to make audiences impressive :) </p>
        </div>

       
        <div className="mt-5">
        
          <h2>Skills</h2>
          <div className="row">
            {/* {skills} */}
          </div>
        </div>
       

      </div>
      </>
      
      )
  }
}

export default About;