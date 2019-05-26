import React from 'react';
import { User } from './User'




export class Post extends React.Component {
  
  render(){
    return(
      
      <div className="post">
        <User 
          alt="user" 
          src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
          name="Vismut S"
        /> 
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          some dscr
        </div>
      </div>
    )
  }
}