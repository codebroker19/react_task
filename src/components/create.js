import React ,{useContext, useState}from 'react'
import {FaCamera} from 'react-icons/fa';

const Create = () => {
//     const [title,settitle]=useState('');
//     const [image,setimage]=useState('');
//     const {create}=useContext(ContextProvider);
//     const handleImage=(e)=>{
//         console.log(e.target.files[0]);
//     }
//     const createPost=(e)=>{
//         e.preventDefault();
//         create({title,image})
//         settitle('');
//         setimage('');
//     }
//   return (
//     <div>
//     <form onSubmit={createPost}>
//         <div className='create_input'>
//         <input type="text" className='create_inputt' placeholder='Type something' onChange={(e)=>{settitle(e.target.value)}} value={title}></input>

//         </div>
//         <div  className='create_second'>
//         <div  className='create_second-a'>
//         <label htmlFor="file">
//             <FaCamera className='cameraicon'/>
//         </label>
//         <input type='file' className='file' id='file' onChange={handleImage}/>
//         </div>
//         <div className='submit'>
//         <input type='submit' value='Create' className='btn'/>
//         </div>
//         </div>
//     </form>


//     </div>
//   )
}

export default Create