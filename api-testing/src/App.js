
import React, {useState,useEffect} from 'react';

import movies from './api/movies.json'




const App = () => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const url ='http://localhost:3001/movies';
        fetch(url).then(res=>res.json())
        .then(res=>setMovies(res))
    },[])


    fetch('http://localhost:3001/movies'
    ).then(response => {
        return response.json();
    }).then(movies => {
        console.log(movies.Title);
    })




   

    return <div className="App">           
                 
       {  movies.map(movie =>
       <div><p>{movie.id}  {movie.Title}</p></div>
       )       
        }         
          


    </div>

};



export default App;
