import React , {useEffect , useState}  from 'react';
import Header from '../../../Components/Header';
import BookCard from'../../../Components/BookCard';
import axios from 'axios';
import {Grid} from '@mui/material'



const ViewBook = () => {
  const [book , setBook] =useState([]);
  const viewAllBookks = async () => {
    await axios.get('http://localhost:8000/save-book-data').then((res) => {
    if(res){setBook(res.data);
    
    }
    
    })
    
    } 
    
    // useEffecr Hook takes two arguments as parameter first is callback function and second is dependency array. 
    // if dependency array is empty then it is in mounting phses.
    useEffect(() => {
    viewAllBookks();
    
    },[])
    


  return (
    <>
    <Grid container>
      <Header/>
      {book?.length > 0 && 
      book?.map((data,index) => {
        return(
          <Grid key={index} item sx={{mt:"15px", width:"30%"}}>
          <BookCard data ={data} />
          </Grid>
        )
      })
    }
    </Grid>
    </>
  )
}

export default ViewBook
