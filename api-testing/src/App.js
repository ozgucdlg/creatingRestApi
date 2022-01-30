
import React from 'react';

import movies from './api/movies.json'




const App = () => {


    fetch('http://localhost:3001/movies'
    ).then(response => {
        return response.json();
    }).then(movies => {
        console.log(movies);
    })


    /* 
      const [valu,setValu]= useState();
 
 
     const getAnswer = async () => {
         componentDidMount() 
         const baseURL = "http://localhost:3001/movies";
         const response = await fetch(baseURL);
         console.log(response);
         const data = await response.json();
         console.log(data);
         setValu(movies.data)
         
 
 
     }
     
 
    const getAnswer = async () => {
         const { data } = await axios(" http://localhost:3001/movies");
         setValu(data.movies);
             
               }; 
 
     useEffect(() => {
         getAnswer();
     },[])
 
     */


    return <div className="App">
        <h2>THIS IS APP.JS </h2>


        {movies.map(movie => (
            <li    
            key={movie.id}>
            
            {movie.id}  

            </li>
        ))}


    </div>

};



export default App;
