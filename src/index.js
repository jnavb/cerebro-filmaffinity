import Preview from './Container/detailFilm'
import filmaffinityIcon from './assets/icon.png'
import translateTo from './i18n/i18n'
import { transformFilm  } from './func'
import { fetchFilms } from './api'

const icon = filmaffinityIcon;

export const fn = ({ term, display, actions, hide }) => {
  display(translateTo.EN.onHold)
  
  let match = term.match(/(?:films?|peli)\s+(.+)/);

  if (!match) return
  else { 
    if(match[0].includes('film'))
      runPlugin(match, display, actions, hide, 'EN'); 
    if (match[0].includes('peli'))
      runPlugin(match, display, actions, hide, 'ES');
  }
}

const runPlugin = (match, display, actions, hide, language) => {
 
  hide(translateTo[language].onHold.id)
      display(translateTo[language].searching)
      const filmTerm = match[1]
      fetchFilms(filmTerm, language).then(items => {
        const results = items.map(item => {
          const film = transformFilm(item);
          return ({
            icon,
            id: film.id,
            title: film.title,
            subtitle: film.subtitle,
            onSelect: () => actions.open(`https://www.filmaffinity.com/${language.toLowerCase()}/film${film.id}.html`),
            getPreview: () => <Preview id={film.id} key={film.id} language={language} />
          })
        })
        if(items.length){
          hide(translateTo[language].searching.id)
          display(results)
        } else {
          display(translateTo[language].notFound)
          hide(translateTo[language].searching.id)
        }
      })
}