import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({data }) {
const navigate = useNavigate();
    const handleRoute= (item) => {
    navigate('/edit-book',{state:{item: item}});
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, }}
        image={data.cover_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"sx={{color:"black"}}>
          {data.book_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"red"}}>
          {data.book_description}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color:"green"}}>
          {data.author_name}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color:"blue"}}>
          {data.book_id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleRoute(data)}>Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}