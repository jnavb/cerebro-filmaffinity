import React from 'react'
import filmaffinityIcon from './assets/icon.png'
import { fetchFilms } from './api'
import Prev from './Container/detailFilm'

export const icon = filmaffinityIcon;

const placeholderWait = {icon,
                id: "Wait1",
                title: 'Type peli <movie>'
}
const placeholderSearching = {icon,
                id: "Wait2",
                title: "Searching movies..."
}
export const fn = ({term, display, actions, hide }) => {
  display(placeholderWait)
  let match = term.match(/(?:films?|peli)\s+(.+)/);
  if(match){
    hide(placeholderWait.id)
    display(placeholderSearching)
  	const filmTerm = match[1]
  	fetchFilms(filmTerm).then(items => {
  		if (!items){
  			return
  		}
  		const results = items.map(item => {
        const film = transformFilm(item);
  			return ({
          icon,
  			  id: film.id,
  			  title: film.title,
          subtitle: film.subtitle,
          onSelect: () => actions.open(`https://www.filmaffinity.com/es/reviews/1/${item['url'].substring(8)}`),
  		    getPreview: () => <Prev id={film.id} key={film.id}/>
        })
      })
  		display(results)
      hide(placeholderSearching.id)
  	}) 
  }
}

const transformFilm = (filmToParse) => {
  const film = {};
  film.id = filmToParse['url'].substring(8, filmToParse['url'].length - 5);
  film.title = filmToParse['title'];
  film.subtitle = '';
  const { title } = film;
  let needSubtitle = title.indexOf(':');
  if(needSubtitle != -1) {
    film.title = title.substring(0, needSubtitle);
    film.subtitle = title.substring(needSubtitle + 1, title.length);
  } 
  needSubtitle = title.indexOf('(');
  if(needSubtitle != -1) {
    film.title = title.substring(0, needSubtitle);
    film.subtitle = title.substring(needSubtitle, title.length);
  } 
  return film;
}


