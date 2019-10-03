import React from 'react';
import { CardContent, Card } from '@material-ui/core';

function MovieInfo(props) {

  return (
      <Card>
          <CardContent>
              <h1>{props.title}</h1>
              <p>{props.rating}</p>
              <p>{props.descrip}</p>
              <img src={props.background}></img>
          </CardContent>
      </Card>
  );
}

export default MovieInfo;