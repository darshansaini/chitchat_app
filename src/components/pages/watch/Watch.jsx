import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Grid } from '@mui/material';
import "./watch.scss"

const Watch = () => {
  const [watchData, setWatchData] = useState(null);

  const fetchWatchData = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-search14.p.rapidapi.com/search",
      params: {
        q: "cats",
        c: "continuation_token",
      },
      headers: {
        "X-RapidAPI-Key": "37526b80a8msh7a2667d551b11cep1ce225jsn8f7c7cc0cdc3",
        "X-RapidAPI-Host": "youtube-search14.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.items);
      setWatchData(response.data.items);
      localStorage.setItem("data", JSON.stringify(response.data.items));
    } catch (error) {
      console.error(error);
    }
  };

// const storedValue = localStorage.getItem("data");
// const watchData = JSON.parse(storedValue);;


  useEffect(() => {
    fetchWatchData();
  }, []);
  // console.log(watchData)

  if (!watchData) {
    return <div className="watch">Loading...</div>;
  }

  return (
  <div className="watch" >
  <Grid container spacing={2} p={3}>
    {watchData.map((videoData, index)=> <Grid item key={index} xs={12} sm={6} md={4} lg={3} style={{height: "500px"}}>
       <CardComponent videoData = {videoData} key ={index}/>
      </Grid>
    )}
  </Grid>
  </div>
  )
  
};

export default Watch;
