import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import Header from '../Components/Header';
import { Button } from '@mui/material'


const AddBook = () => {
const navigate=useNavigate();

const [formData, setFormData] = useState({});
console.log('formData' ,formData);

  const handleChange = (event)=> {
    const {name,value} = event.target;
setFormData((prevData)=> ({
...prevData,
[name]:value
  }))
}

const handleSubmit = async (event) =>  {
  event.preventDefault();

  axios.post("http://localhost:8000/save-book-data",formData).then((res)=>{
    if(res){navigate('/view-book');
  }
  }).catch(error => {console.log("error" , error);})
}

  return (
    <div>
      <Header/>
  <div className='Addbook_Back'><h1>Add Your Book</h1>
  <form onSubmit={handleSubmit}>
<TextField sx={{width:'80%' , margin:'10px'}}label="Book Id" type={"text"} onChange={handleChange} name="book_id" variant='outlined'/>
<TextField sx={{width:'80%' , margin:'10px'}}label="Book Name" type={"text"} onChange={handleChange} name="book_name" variant='outlined'/>
<TextField sx={{width:'80%' , margin:'10px'}}label="Book Description" type={"text"} onChange={handleChange} name="book_description" variant='outlined'/>
<TextField sx={{width:'80%' , margin:'10px'}}label="Author Name" type={"text"} onChange={handleChange} name="author_name" variant='outlined'/>
<TextField sx={{width:'80%' , margin:'10px'}}label="Cover Image" type={"text"} onChange={handleChange} name="cover_img" variant='outlined'/>
<br/>
<Button sx={{m:2, width:'9%' }}variant='contained' color='primary' type='submit'>Save</Button>

  </form>
  
  
  </div>    
    </div>
  )
}

export default AddBook
