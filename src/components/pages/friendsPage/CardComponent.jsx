import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import "./CardComponent.scss"

const CardComponent = ({ FriendData }) => {
  const { id, name, username, email, profilePicture } = FriendData;

  return (
    <Card className='friends_card' key={id}>
      <CardActionArea>
      <Typography className='username' gutterBottom variant="h6" pl={1} component="div" >
            @{username}
          </Typography>
        <CardMedia className='friend_image' component="img" image={profilePicture} alt={username}  />
        <CardContent>
          <Typography className='friend_name' gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" className='friend_email' >{email}</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  );
};

export default CardComponent;

