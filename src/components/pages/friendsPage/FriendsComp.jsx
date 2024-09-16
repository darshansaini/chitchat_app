import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Grid } from '@mui/material'
import './friendsComp.scss'
import { FriendsList } from "../../../assets/data/data";

const Friends = () => {
    return (
        <div className="friends_comp">
        <Grid container spacing={3} p={3} >
          {FriendsList.map((FriendData, index)=> <Grid item key={index} xs={12} sm={6} md={4} lg={3} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
             <CardComponent FriendData = {FriendData} key ={index}/>
            </Grid>
          )}
        </Grid>
        </div>
        )     
}

export default Friends