import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles, } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import App_bar from './App_bar';
 import dynamic from "next/dynamic";
 import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
      
    },
  },
  rootc: {
    maxWidth: 600,
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

 function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <App_bar/>
    <div style={{ width: '100%' }}>
    <Box display="flex" justifyContent="center" mt={20} p={0.5} bgcolor="background.paper">
    <Typography justifyContent = "center" component="div" variant="h4" style={{ height: '100vh' }} >
               Grow your business with <span style={{ color: 'aqua' }} >Lenin</span>
               <br/>
               We are team of talented developers making Website
               <br/>
               <br/>
               Visit Our <span style={{ color: "green" }} >Blog</span>  <ColorButton variant="contained" color="primary" href="/posts" className={classes.margin}>Click here</ColorButton>
     </Typography>
     <div className={classes.root}>
     <Button  variant="contained" color="secondary"href="/About">
            Get Started
          </Button>
     </div>
     <div>
     <Card className={classes.rootc}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="600"
              image='/image/bg7.jpg'
              title="Business"
            />
             </CardActionArea>
             </Card>
             </div>
    </Box>
     </div>
     </React.Fragment>
     
  )
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});