import React from 'react'; 


export class User extends React.Component { 

  render() { 
    return(
      
      <a className={this.props.min ? "user min" : "user"}>
        <img src={this.props.src} alt={this.props.alt}/>
        <div>{this.props.name}</div>
      </a>
    )
  }
}