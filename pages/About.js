import React, { Component } from 'react'
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import dynamic from "next/dynamic";
import App_bar from './App_bar';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
      
    },
  },
  rootd: {
    maxWidth: 600,
  },
}));

const About =()=> {
  const classes = useStyles();
    return (
      
  <React.Fragment>
   <App_bar/>
   
<div style={{ width: '100%' }}>
<Box display="flex" justifyContent="center" mt={20} p={0.5} bgcolor="background.paper">
<Typography justifyContent = "center" comonent="div" variant="h4" style={{ height: '100vh' }} >
        Welcome to About page
           <br/>
           We are team of talented developers making Website
 </Typography>
 <div className={classes.root}>
 <Button  variant="contained" color="primary"href='/Contact'>
       Contact Now
      </Button>
 </div>
 <div>
 <Card className={classes.rootd}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="work"
          height="600"
          image='/image/bs2.jpg'
          title="Business"
        />
         </CardActionArea>
         </Card>
         </div>
</Box>
 </div>
 </React.Fragment>

  );
}
  
export default dynamic(() => Promise.resolve(About), {
  ssr: false,
});