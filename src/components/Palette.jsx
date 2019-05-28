import React from 'react';
import { ErrorMessage } from  './ErrorMessage';
import { InstaService } from '../services/instaService';
import spinner from '../spinner.gif';


export class Palette extends React.Component { 
  InstaService = new InstaService();

  state = {
    photos: [],
    error: false,
    isLoading: true
  }

  componentDidMount(){
    this.updatePhotos();
  }


  updatePhotos(){
    this.InstaService.getAllPhotos()
    .then(this.onPhotosLoaded)
    .catch(this.onError);
  }

  onPhotosLoaded = (photos) => { 
    this.setState({
      photos,
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
      const {src, alt, id} = item;

      return ( 
        <img src={src} alt={alt} key={id}/>
      )
    })
  }

  render(){
    const {error, photos, isLoading} = this.state;


    if (error) { 
      return <ErrorMessage />
    }
    else if (isLoading) {
      return (
        <div className="palette">
          <img 
            src={spinner} 
            alt="spinner"
            className="spinner"/>
        </div>
      )
    }

    const items = this.renderItems(photos);

    return(
      
      <div className="palette">
        {items}
      </div>
    )
  }
}