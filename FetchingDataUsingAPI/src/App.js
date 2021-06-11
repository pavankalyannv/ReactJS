import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieData, setMovies] = useState([]);
  const [loading, setLoading ] = useState(false);
  const [error, setError] = useState(null);
  

    const fetchmoviehandler = useCallback( async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json();
    
      const formatedData = data.results.map( (moviedata) =>{
          return{
            id: moviedata.episode_id,
            title: moviedata.title,
            releaseDate: moviedata.release_date,
            openingText: moviedata.opening_crawl,
          }
          
        });
        setMovies(formatedData);
        
      }
        catch(error) {
          setError(error.message);
        };
        setLoading(false);
      },[] );
    
    useEffect(() =>{
      fetchmoviehandler();
    }, [fetchmoviehandler])
    
  
      let content = 'Found no movies';
  
      if(loading){
        content = 'Loading...' ;
      }

      if(error){
        content =<p>{error} </p>;
      }

      if(movieData.length>0){
        content= <MoviesList movies={movieData} />;
      }
    

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmoviehandler  }>Fetch Movies</button>
      </section>
      <section>
       {content}
      </section>
    </React.Fragment>
  ); 
}

export default App;
