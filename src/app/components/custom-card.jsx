'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { redirect } from 'next/navigation'

const  CustomCard = ({ title, description, imageUrl }) => {

  const clickHandler = () => {
    window.location.href = '/time-capsule';
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtv01D5umpYJae-xi-WvjpBCTAjdBcCpdJ_zsbTp5E5nfdU8TvhOJV6aarVGbfDCn7ceF4Bzly7xjDPAw0lVBplN_D5Di_7paAcHGf6va2lpwPaUXjwRR40D6bAVxjJ4R7bhAOLa5hEkuk/s800/time_cupsule.png"
        title="green iguana"
        className='w-full h-56'
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          タイトル
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ここには、タイムカプセル投稿の説明が入ります。
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={clickHandler} size="small text-left w-full">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CustomCard;