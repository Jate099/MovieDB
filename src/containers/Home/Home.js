import React from 'react';
import { Grid, CssBaseline, Button, makeStyles } from '@material-ui/core';
import Search from '../../components/Search/Search';
import MovieList from '../../components/MovieList/MovieList';
import superagent from 'superagent';

let server = 'https://api.themoviedb.org';
let key = '2c73b0f220a02912d9c2cd39c09588e2';
let plural = '';
let type = 'discover';
let interaction = 'popularity.desc';
let action = 'sort_by';

function Home() {

    const clases = useStyles();

    const [movieLs, setMovieLs] = React.useState(null);

    let url = `${server}/3/${type}/movie${plural}?${action}=${interaction}&api_key=${key}`

    superagent.get(url).then((response) => {
        var list = response.body.results.slice(0,5);
        setMovieLs(list);
    })

    return (
        <Grid>
            <Grid item>
                <Search></Search>
                <h1>Trending Now</h1>
            </Grid>

            {movieLs && movieLs.map((item) => {
                return <Grid item md={2} clasName={classes.content}>
                    <MovieList
                        {...item}
                    />
                </Grid>
            })}

        </Grid>
    );
}

const useStyles = makeStyles(theme => {
content{
    
}
})

export default Home;