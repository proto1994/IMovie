import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function MovieCard(props: any) {
  const { image, title, desc } = props;

  const classes = useStyles({});
  return (
    <Card className={classes.card} onClick={() => {}}>
      {image && <CardMedia className={classes.cardMedia} image={image} title={title} />}
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{desc}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    height: 300,
  },
  cardContent: {
    flexGrow: 1,
  },
}));
