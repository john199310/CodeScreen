import React, { Component } from 'react';
import './style.css';
import Films from '../Films'
import { useState } from 'react';

import axios from 'axios';

const filmsEndpointURL = "https://app.codescreen.com/api/assessments/films";

//Your API token. This is needed to successfully authenticate when calling the films endpoint. 
//This needs to be added to the Authorization header (using the Bearer authentication scheme) in the request you send to the films endpoint.
const apiToken = "8c5996d5-fb89-46c9-8821-7063cfbc18b1"

const App = () => {
  const [directorName, setDirectorName] =  useState('');
  const [films, setFilms] = useState([]);

  const getFileList = async ()=>{
    var config = {
      method: 'get',
      url: `${filmsEndpointURL}?directorName=${directorName}`,
      headers: { 
        'Authorization': `Bearer ${apiToken}`
      }
    };
      // const res = await axios.get(filmsEndpointURL+`/directorName=${directorName}`, config); 
    const res = await axios(config)
    console.log('my result====>', res)
    if(res.status == 200 ) 
    setFilms(res.data);     
  }

  return (
    <div>
      <p className="films-analysis-service">Films Analysis Service </p>
      <div className='director-name-input-box'>
        <input className="enter-director-name"type='text' value={directorName} onChange={(e) => setDirectorName(e.target.value)}/>
      </div>

      <div className="submit-button" onClick={()=>getFileList()}>
        <span className='submit-button-text'>
          SUBMIT
        </span>
      </div>

      <Films films = {films}/>
    </div>
  );
  
}

export default App;