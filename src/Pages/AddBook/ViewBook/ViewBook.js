import React , {useEffect , useState}  from 'react';
import Header from '../../../Components/Header';
import BookCard from'../../../Components/BookCard';
import axios from 'axios';


const ViewBook = () => {
  const [data , setData] =useState([]);
  console.log('data=>=>' ,data);
  const viewAllBookks = async () => {
    await axios.get('http://localhost:8000/save-book-data').then((res) => {
    if(res){setData(res.data);
    
    }
    
    })
    
    } 
    
    // useEffecr Hook takes two arguments as parameter first is callback function and second is dependency array. 
    // if dependency array is empty then it is in mounting phses.
    useEffect(() => {
    viewAllBookks();
    
    },[])
    


  return (
    <div>
      <Header/>
      <BookCard/>
    </div>
  )
}

export default ViewBook
