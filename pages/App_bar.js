import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link'
import { spacing } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const theme = {
    spacing: 8,
  }
  

export default function  DenseAppBar() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title} >
           Lenin website
          </Typography>
             <Typography variant="h6"  >
            <Link href ="/"> Home</Link>  
            <Link href ="/About" > About </Link>  
            <Link  href ="/Service" > Service </Link> 
            <Link  href ="/Contact" > Contact </Link> 
          </Typography>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
