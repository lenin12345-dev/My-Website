import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import App_bar from './App_bar';
import Card from './Card'
import Sdata from './Sdata'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import dynamic from "next/dynamic";


const useStyles = makeStyles((theme) => ({

  gridContainer:{
      margin:'30px',
      paddingRight:'20px'
      
  },
}));

 function Service () {
  const classes = useStyles();

  return (
    <React.Fragment>
      <App_bar/>
     

    <Box ml={90} color="success.main" display="flex" component="h1">Our Services</Box>
     <Grid  container spacing ={2}  className= {classes.gridContainer}>
   
    {Sdata.map((val,ind)=>
     <Grid item xs={12} sm={6}  lg={4}> 
   
         <Card key ={ind} imgsrc ={val.imgsrc} title={val.title}/>
         </Grid> 
      )}
   </Grid>
   </React.Fragment>
      
  );
}
export default dynamic(() => Promise.resolve(Service), {
  ssr: false,
});