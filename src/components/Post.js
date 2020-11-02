import React from 'react';

import Image from 'react-image-resizer'

function Post({ alt, date, image, title, width, height, url, key, category }) {
    return (
      // <div class="uk-animation-toggle" tabindex="0">
      <div>
        <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-fade">
            <img
            className="uk-img"
            // height={ height * 0.3 } 
            // width={ width * 0.3 } 
            src={image ? image : "https://source.unsplash.com/random/1600x900/"}
            alt="Sunset in the mountains"
            />
          <h3 class="uk-card-title">{title}</h3>
          {/* <p>{category}</p>
          <span className="uk-position-top-right uk-heading-xlarge">{key}</span> */}
        </div>
      </div>
    //   <div className="container">
          
    //     <a href={url}>
    //       <img alt={alt} src={image} />
    //     </a>
    //     <div className="text">
    //       <h2>{title}</h2>
    //       <h4>{date}</h4>
    //     </div>
    //   </div>
    )
  }
  
  export default Post