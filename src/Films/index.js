import React, { Component, useEffect } from 'react';
import './style.css';
import { useState } from 'react';

const Films =(props) => {

  /**
    * Retrieves the name of the best rated film from the given list of films.
    * If the given list of films is empty, this method should return "N/A".
  */
  const {films} = props;

  const [filmList, setFilmList] = useState([])

  useEffect(()=>{
    console.log('films====>', films)
    if (films) setFilmList(films)
  }, [films])

  const getBestRatedFilm = (films) => {
    if (films == []) return {};

    let bestRatedFilm = films[0];
    for(let i = 0; i<films.length; i++){
      if (bestRatedFilm.rating < films[i].rating) bestRatedFilm = films[i];
    }
    return bestRatedFilm;
    //TODO Implement
  }


  /**
    * Retrieves the length of the film which has the longest running time from the given list of films.
    * If the given list of films is empty, this method should return "N/A".
    * 
    * The return value from this function should be in the form "{length} mins"
    * For example, if the duration of the longest film is 120, this function should return "120 mins".
  */
  const getLongestFilm = (films) => {
    //TODO Implement
    if (films == []) return {};

    let bestRatedFilm = films[0];
    for(let i = 0; i<films.length; i++){
      if (bestRatedFilm.length < films[i].length) bestRatedFilm = films[i];
    }
    return bestRatedFilm;
  }

  /**
    * Retrieves the average rating for the films from the given list of films, rounded to 1 decimal place.
    * If the given list of films is empty, this method should return 0.
  */
  const getAverageRating = (films) => {
    //TODO Implement
    if (films == []) return 0;

    let sum = 0;
    for(let i = 0; i<films.length; i++){
      sum = sum + films[i].rating
    }
    let ava = sum/films.length
    return ava.toFixed(1);
  }
  
  const getShortestNumberOfDaysBetweenFilmReleases = (films) => {
    //TODO Implement
    if (!films) return 'N/A'
    if (films.length == 1 ) return 0;
    const sortedFilm = films.sort((a,b)=>{
      if(getDays(a.releaseDate) > getDays(b.releaseDate)) return 1;
      if(getDays(a.releaseDate) < getDays(b.releaseDate)) return -1;
      return 0;
    })
    let shortest= -1;
    for (let i = 1; i< sortedFilm.length; i++){
      console.log(sortedFilm[i].releaseDate)
      let duration = getDays(sortedFilm[i].releaseDate)-getDays(sortedFilm[i-1].releaseDate);
      if (shortest == -1) shortest = duration
      if (duration < shortest ) shortest = duration
    }

    let TotalDays = Math.ceil(shortest / (1000 * 3600 * 24));
    return TotalDays
  }

  const getDays = (str)=>{
    
    const _date = new Date(str);
    return _date.getTime(); 
  }

  return (

        <div className='stats-boxes'>
          {filmList === [] ?
          <div>Empty</div> :
          <>
            <div className='stats-box'>
              <div className='stats-box-heading'>Best rated film</div>
              <div className = 'stats-box-info'>
                {getBestRatedFilm(filmList)?.name}
              </div>
            </div>
            <div className='stats-box'>
              <div className='stats-box-heading'>Longest film duration</div>
              <div className = 'stats-box-info'>
                {getLongestFilm(filmList)?.length} &nbsp; mins
              </div>
            </div>
            <div className='stats-box'>
              <div className='stats-box-heading'>Average rating</div>
              <div className = 'stats-box-info'>
                {getAverageRating(filmList)}
              </div>
            </div>
            <div className='stats-box'>
              <div className='stats-box-heading'>Shortest days between releases</div>
              <div className = 'stats-box-info'>
                {getShortestNumberOfDaysBetweenFilmReleases(filmList)}
              </div>
            </div>
          </>
          }
        </div>
    
  )

  
}


export default Films;