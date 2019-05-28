import React from 'react';
import { User } from './User'; 
import { Palette } from './Palette';

export const Profile = () => {
  return (
    
    <div className="container profile">
      <User 
        src="https://static.zara.net/photos///2019/V/T/2/p/4252/605/800/2/w/400/4252605800_1_1_1.jpg?ts=1555411116296"
        alt="Man"
        name="Cool Man"/>

      <Palette />
    </div>
  )
}