import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

import profilepic1 from '../images/profile_11zon.jpeg';
import profilepic2 from '../images/profilepic2.jpg';
import profilepic3 from '../images/profilepic3.jpg';
import profilepic4 from '../images/profilepic4.jpg';
import profilepic5 from '../images/profilepic5.png';
import profilepic6  from '../images/profile.png';
const Sidebar = () => {
    
  return (
    <div className='sidebar'>
    <div className='sidebar-user'>
    <div className='sidebar-username-avatar'>D</div>
    <div className='sidebar-user-name'>Debanshu Panda</div>
    </div>
    <div className="sidebar-list">
        <h3>Suggestions for you</h3>
        <div className='sidebar-user'>
    <img src={profilepic2} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Siddhant Rai Sikand</div>
    </div>
    <div className='sidebar-user'>
    <img src={profilepic1} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Raj Gupta</div>
    </div>
    <div className='sidebar-user'>
    <img src={profilepic6} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Aryan Kumar</div>
    </div>
    <div className='sidebar-user'>
    <img src={profilepic3} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Rahul Gupta</div>
    </div>
    <div className='sidebar-user'>
    <img src={profilepic4} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Kishore Khan</div>
    </div>
    <div className='sidebar-user'>
    <img src={profilepic5} className='imageclass' alt='alternate'/>
    <div className='sidebar-user-name'>Ankit Sharma</div>
    </div>
        
      </div>
    </div>
  )
}

export default Sidebar