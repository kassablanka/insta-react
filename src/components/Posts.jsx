import React from 'react';
import { Post } from './Post'




export class Posts extends React.Component {
  
  render(){
    return(
      
      <div className="left">
        <Post alt="nature" src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"/> 
      </div>
    )
  }
}