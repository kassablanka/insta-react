import React from 'react'; 
import { User } from './User'; 
import { InstaService } from '../services/instaService';
import { ErrorMessage } from  './ErrorMessage';
import spinner from '../spinner.gif';


export class Users extends React.Component { 
  InstaService = new InstaService();

  state = {
    users: [],
    error: false,
    isLoading: true
  }

  componentDidMount(){
    this.updateUsers();
  }


  updateUsers(){
    this.InstaService.getAllPosts()
    .then(this.onUsersLoaded)
    .catch(this.onError);
  }

  onUsersLoaded = (posts) => { 
    this.setState({
      users: posts,
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
      const { name, altname, photo, id } = item;

      return ( 
          <User 
            key={id}
            alt={altname} 
            src={photo}
            name={name}
            min
          /> 
      )
    })
  }

  render(){
    const {error, users, isLoading} = this.state;

    if (error) { 
      return <ErrorMessage />
    }
    else if (isLoading) {
      return (
        <div className="right">
          <img 
            src={spinner} 
            alt="spinner"
            className="spinner"/>
        </div>
      )
    }


    const items = this.renderItems(users);

    return ( 
      <div className="right">
        <User 
            alt="myPhoto" 
            src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
            name="Vismut S"
          />
        <div className="users__block">
          {items}
        </div>
      </div>
    )
  }
}