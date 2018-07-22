import React from 'react'
import filmaffinityIcon from './assets/icon.png'
import { fetchFilms } from './api'
import Preview from './Container/detailFilm'
import { placeholders, transformFilm } from './func'

export const icon = filmaffinityIcon;


const {wait, searching, notFound} = placeholders;
export const fn = ({term, display, actions, hide }) => {
  display(wait)
  let match = term.match(/(?:films?|peli)\s+(.+)/);
  if(match){
    hide(wait.id)
    display(searching)
  	const filmTerm = match[1]
  	fetchFilms(filmTerm).then(items => {
      const results = items.map(item => {
        const film = transformFilm(item);
        return ({
          icon,
  			  id: film.id,
  			  title: film.title,
          subtitle: film.subtitle,
          onSelect: () => actions.open(`https://www.filmaffinity.com/es/reviews/1/${item['url'].substring(8)}`),
  		    getPreview: () => <Preview id={film.id} key={film.id}/>
        })
      })
      if(items.length){
        hide(searching.id)
        display(results)
      } else {
        display(notFound)
        hide(searching.id)
      }
  	})   
  }
}


