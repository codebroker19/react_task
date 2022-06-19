import React from 'react'
import commentsdata from './comments_data.json'
const Comments = (props) => {
  return (
    <div>
    {props.code.map((value,user)=>(
      <div>
        <p>{value.text}</p>
      </div>
    ))}
</div>
  )
}

export default Comments