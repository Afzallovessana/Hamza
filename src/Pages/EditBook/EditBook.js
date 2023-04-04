import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
const navigate = useNavigate();
const { state } = useLocation();
const [formData, setFormData] = useState({
    book_name: state.item.book_name,
    author_name: state.item.author_name,
    cover_image: state.item.cover_image,
    book_description: state.item.book_description,
    book_id: state.item.book_id,


})

console.log("formDataEdit" , formData);

const handleChange = (event) =>{
const {name, value} = event.target;
setFormData((prevstate) => ({
    ...prevstate,
    [name]:value
}) );

} 
const handleSubmit = async(event) => {
    event.preventDefault();


    await axios.patch('http://localhost:8000/save-book-data' , formData).then((res) =>{
        if(res) {
            navigate('/view-book');
    }
}).catch(error => {console.log("error" , error);})
}

  return (
    <div>
      <Header/>
  <div className='Addbook_Back'><h1>Edit Your Book</h1>
  <form onSubmit={handleSubmit}>
<TextField value={formData.book_id} disabled sx={{width:'80%' , margin:'10px'}}label="Book Id" type={"text"}  name="book_id" variant='outlined'/>
<TextField value={formData.book_name} onChange={handleChange} sx={{width:'80%' , margin:'10px'}}label="Book Name" type={"text"}  name="book_name" variant='outlined'/>
<TextField value={formData.book_description} onChange={handleChange} sx={{width:'80%' , margin:'10px'}}label="Book Description" type={"text"}  name="book_description" variant='outlined'/>
<TextField value={formData.author_name} onChange={handleChange} sx={{width:'80%' , margin:'10px'}}label="Author Name" type={"text"}  name="author_name" variant='outlined'/>
<TextField value={formData.cover_img} onChange={handleChange} sx={{width:'80%' , margin:'10px'}}label="Cover Image" type={"text"}  name="cover_img" variant='outlined'/>
<br/>
<Button sx={{m:2, width:'9%' }}variant='contained' color='primary' type='Update'>Save</Button>

  </form>
  </div>
  
    </div>
  )
}

export default EditBook
