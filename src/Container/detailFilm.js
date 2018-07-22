import React from 'react'
import Film from '../Component/film'
import { detailFilm } from '../api'
import { Loading } from 'cerebro-ui'

export class Prev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmPrev: null
    }
  }
  componentDidMount() {
    const { id } = this.props;
    detailFilm(id).then(filmPrev => {
      if (filmPrev){
        filmPrev = transformDetailFilm(filmPrev);
        this.setState({ filmPrev });
      }
    })
  }
  render() {
    const { filmPrev } = this.state;
    return (filmPrev) ? <Film {...filmPrev}/>
                  : <Loading />
  }
}
const transformDetailFilm = (film) => {
  if ( Array.isArray(film.cast)) 
    film.cast = film.cast.slice(0,6).join(', ');  
  
  if (film.director)
    film.director = deleteSecundaries(film.director);
  
  if (film.script)
    film.script = deleteSecundaries(film.script);

  film.ratingBackground = calculateBackground(film.rating);
  
  return film;
}


const deleteSecundaries = (people) => { 
  let needsDelete = people.indexOf('(');
  if(needsDelete != -1) {
     people = people.substring(0, needsDelete);
  } 
  needsDelete = people.indexOf(',');
  if (needsDelete != -1)
    people = people.split(',',2).join(',');
  return people;
} 


const calculateBackground = (rating) => {
  const ratingStyle = {}; 
  if (rating >= 8) {
    ratingStyle.background = 'ForestGreen';
    ratingStyle['border-color'] = 'gold';
  }
  if (rating >= 7 && rating < 8) 
    ratingStyle.background = 'ForestGreen';
  if (rating >= 6 && rating < 7) 
    ratingStyle.background = '#99cc00';
  if (rating >= 5 && rating < 6) 
    ratingStyle.background = '#cccc00';
  if (rating >= 0 && rating < 5) 
    ratingStyle.background = 'tomato';
  if (!rating) 
    ratingStyle .background = 'grey';
  return ratingStyle;
}

export default Prev;

