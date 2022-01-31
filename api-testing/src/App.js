import React, {useState,useEffect} from 'react';
import axios from 'axios';



const App = () => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const url ='http://localhost:3001/movies';
        axios.get(url).then((res)=>{
            setMovies(res.data);

        });
       
    },[]);

 

    return <div className="App">           
                 
       {  movies.map((movie) =>(
       <div><p>{movie.Title}</p></div>
       )       
       )}         
          


    </div>

};



export default App;
