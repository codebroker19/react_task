import React,{useContext, useState} from 'react'

import {FaHeart} from 'react-icons/fa';
import picturedata from './picturedata.json'
import commentsdata from './comments_data.json'


const Posts = () => {
    //const{posts}=useContext(ContextProvider);
    const[num,setnum]=useState(0)
    const incnum=()=>{
      setnum(num+1);
    }
  return (
    <div>
    {
        picturedata&&picturedata.map(record=>{
            return(
                <div className='posts'>
                <div className='post_header'>
                <div className='post_header_avatar'></div>
                <div className='post_header_name'>{record.code}</div>
                </div>
                <div>
                <img src={record.display_src} className='post_img' alt='image_content' key={record.code}/>
                <h3 className='caption'>{record.caption}</h3>
                </div>
                
                <div className='post_likes'>{num}</div>
                
                {
                  record.comments&&record.comments.map(data=>{
                    return(
                      <>
                      <FaHeart onClick={incnum} className='like'/>
                      <h5 className='post-comments'>{data.user}:{ data.text }</h5>
                      </>
                    );
                  })
                }
                </div>
            );
        })
    }
    </div>
  )
}

export default Posts