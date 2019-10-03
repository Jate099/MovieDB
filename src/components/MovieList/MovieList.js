import React from 'react';
import { Card, CardContent } from '@material-ui/core';

function MovieList(props) {
    return (
        <Card>
            <CardContent>
                <h1>{props.title}</h1>
                <p>{props.vote_average}</p>
                <p>{props.overview}</p>
                <img src={props.background}></img>
            </CardContent>
        </Card>

    );
}

export default MovieList;