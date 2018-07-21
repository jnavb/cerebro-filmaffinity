import React from 'react'
import filmaffinityIcon from './assets/icon.png'
import { fetchFilms } from './api'
import Prev from './Container/detailFilm'

export const icon = filmaffinityIcon;

const placeholderWait = {icon,
                id: "Wait1",
                title: 'Type peli <movie> to begin'
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
        const id = item['url'].substring(8, item['url'].length - 5);
  			return ({
          icon,
  			  id: id,
  			  title: item['title'],
          subtitle: id,
          onSelect: () => actions.open(`https://www.filmaffinity.com/es/reviews/1/${item['url'].substring(8)}`),
  		    getPreview: () => <Prev id={id} key={id}/>
        })
      })
  		display(results)
      hide(placeholderSearching.id)
  	}) 
  }
}



