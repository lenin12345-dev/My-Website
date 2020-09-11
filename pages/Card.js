import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    rootc: {
      maxWidth: 300,
    },
  }));
  const Cards =(props)=> {
    const classes = useStyles();
      return (
        <div>
        <Card className={classes.rootd}>
             <CardActionArea>
               <CardMedia
                 component="img"
                 alt="work"
                 height="300"
                 image={props.imgsrc}
                 title={props.title}
               />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Business Solution
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The service business provides intangible products, such as accounting, banking, education, insurance, treatment, and transportation.
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
                </div>
                  );
                }
export default Cards;                