import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import VideoComponent from './VideoComponent';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './CardComponent.scss'

const StyledButton = styled(Button)({
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
});

const CardComponent = ({ videoData }) => {
  const { title, url,id, views,channel_name, channel_url,length } = videoData;

  return (
    <Card className='video_card' style={{boxShadow:"2px 4px 10px 1px rgba(201, 201, 201, 0.47)"}}>
      <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
      <div
        style={{
          position: 'relative',
          width: '300px', // Set your desired width
          height: '300px', // Set your desired height
          overflow: 'hidden',
        }}
      >
        <VideoComponent videoUrl={url} />
      </div>
      <CardContent style={{height:"150px"}}>
          <Typography gutterBottom variant="h6" component="div" style={{display:"flex", gap:"20px"}}>
            <a href={channel_url}><span>{channel_name}</span></a><span>{length}</span>
          </Typography>
          <Typography variant="body2" >{title}</Typography>
        </CardContent>
    </div>
    </Card>
  );
};

export default CardComponent;

