import React from 'react'; 
import { User } from './User'; 




export const Users = () => { 
  
  return ( 
    <div className="right">
      <User 
          alt="user" 
          src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
          name="Vismut S"
        />
      <div className="users__block">
        <User 
            alt="user" 
            src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
            name="Vismut S"
            min
          />
          <User 
            alt="user" 
            src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
            name="Vismut S"
            min
          />
          <User 
            alt="user" 
            src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
            name="Vismut S"
            min
          />
      </div>
    </div>
  )
}