import React from 'react'
import insta_logo from '../images/insta_logo.png';
import {FaSistrix} from 'react-icons/fa';
import menu from '../images/dp.jpeg';
import {FaHome} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaRegCompass} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';

function Navbar() {
//   const {model,openModel,user,loader,logout}=React.useContext(ContextProvider);
//   console.log(model);
//   const openforms=()=>{
// openModel();
//   }

//   const userLogout=()=>{
// logout();
//   }
  // const Checkuser=()=>{
  //   return  !loader?(!loader&&user ?(<ol >{user.displayName}<span onClick={userLogout}>logout</span></ol>):
  //   (<ol onClick={openforms}>Register/Login</ol>)):("...")
  // }
  return (
    <div className='navbar'>
    <div className='insta_logo'>
    <div className='navbar_first_logo'>
    <img src={insta_logo} alt='insta logo'/>
    </div>
    

    </div>
    <div className='search_bar'>
    <input type="text" className='searchbar' placeholder='search'/>
    {/* remove search icon in the end */}
    <FaSistrix className='searchicon'/>
    </div>
    <div className='profile_img'>
    <ol><FaHome className='navbar_icons'/></ol>
    <ol><FaTelegramPlane className='navbar_icons'/></ol>
    <ol><FaRegCompass className='navbar_icons'/></ol>
    <ol><FaHeart className='navbar_icons'/></ol>
    {/* {Checkuser()} */}

    </div>
    </div>
  )
}

export default Navbar