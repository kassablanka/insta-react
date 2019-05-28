import React from 'react';
import { User } from './User'
import { InstaService } from '../services/instaService';
import { ErrorMessage } from  './ErrorMessage';
import spinner from '../spinner.gif';

export class Posts extends React.Component {
  InstaService = new InstaService();

  state = {
    posts: [],
    error: false,
    isLoading: true
  }

  componentDidMount(){
    this.updatePosts();
  }


  updatePosts(){
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError);
  }

  onPostsLoaded = (posts) => { 
    this.setState({
      posts,
      error: false,
      isLoading: false
    })
  }


  onError = (err) => { 
    this.setState({
      error: true,
      isLoading: false
    })
  }
  

  renderItems(arr){ 
    return arr.map((item) => {
      const { name, altname, photo, src, alt, descr, id } = item;

      return ( 
        <div 
          className="post"
          key={id}
        >
          <User 
            alt={altname} 
            src={photo}
            name={name}
            min
          /> 
          <img src={src} alt={alt}></img>
          <div className="post__name">
            {name}
          </div>
          <div className="post__descr">
            {descr}
          </div>
        </div>
      )
    })
  }

  render(){
    const {error, posts, isLoading} = this.state;

    if (error) { 
      return <ErrorMessage />
    }
    else if (isLoading) {
      return (
        <div className="left">
          <img 
            src={spinner} 
            alt="spinner"
            className="spinner"/>
        </div>
      )
    }
    
    const items = this.renderItems(posts);

    return(
      
      <div className="left">
        {items}
      </div>
    )
  }
}