import icon from './assets/icon.png'


export const placeholders ={
  wait:{
    icon,
    id: "0",
    order: 11,
    title: "Type peli <movie>"
  },
  searching:{
    icon,
    id: "1",
    title: "Searching movies..."
  },
  notFound:{
    icon,
    id: "2",
    title: "No movies found"
  }
}

export const transformFilm = (filmToParse) => {
  const film = {};
  film.id = filmToParse['url'].substring(8, filmToParse['url'].length - 5);
  film.title = filmToParse['title'];
  film.subtitle = '';
  const { title } = film;
  let needSubtitle = title.indexOf(':');
  if(needSubtitle != -1) {
    film.title = title.substring(needSubtitle + 1, title.length);
    film.subtitle = title.substring(0, needSubtitle);
  } 
  needSubtitle = title.indexOf('(');
  if(needSubtitle != -1) {
    film.title = title.substring(0, needSubtitle);
    film.subtitle = title.substring(needSubtitle, title.length);
  } 
  return film;
}

export const transformDetailFilm = (film) => {
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