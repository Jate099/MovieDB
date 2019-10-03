import React from 'react';
import superagent from 'superagent';

let server = 'https://api.themoviedb.org';
let key = '2c73b0f220a02912d9c2cd39c09588e2';

function Search() {

    const [movies, setMovies] = React.useState(null);

    function handleInput(event) {
        var search = event.target.value;
        let url = `${server}/3/search/movie?query=${search}&api_key=${key}`
        console.log(search);

        if (search.length < 2) return;

        //superagent es una forma de hacer fetch
        superagent.get(url).then((response) => {
            //console.log(result.body);
            setMovies(response.body.results);
        })
    }

    return (<div onInput={handleInput}>
        <input type="text" />

        {movies && <ul>
            {movies.map((elem) => {
                return <li key={elem.id}>{elem.title}</li>;
            })}
        </ul>}
    </div>
    );
}

export default Search;