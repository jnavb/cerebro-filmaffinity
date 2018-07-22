import React from 'react'
import styles from './styles.css'

export const Film = (({
  title, year, poster_big, sinopsis, director,
  script, rating, duration, cast
}) => {
  let colorBackground = {}
  colorBackground = calculateBackground(rating)
  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <div className={styles.rating} style={colorBackground}>  
          {rating ? <span>{rating}</span>
                  : <span>N/A</span>}
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.image}>
        { poster_big && <img src={poster_big} className={styles.poster} /> }
      </div>
      <div className={styles.imdbMeta}>
        { duration && <span>{duration} min.</span> }
        { year && <span>{year}</span> }
      </div>
      <div>
      <dl className={styles.imdbDetails}>
        {director && <dt>Directors:</dt>}
        <dd>{director}</dd>
        {script && <dt>Writers:</dt>}
        <dd>{script}</dd>
        {cast && <dt>Stars:</dt>}
        <dd>{cast}</dd>
      </dl>
      </div>
    </div>
    )
  }
)

const calculateBackground = (rating) => {
  const ratingStyle = {}; 
  if (rating >= 8) {
    ratingStyle.background = 'ForestGreen';
    ratingStyle['border-color'] = 'gold';
  }
  if (rating >= 7 && rating < 8) {
    ratingStyle.background = 'ForestGreen';
    ratingStyle['border-color'] = 'white';
  }
  if (rating >= 6 && rating < 7) {
    ratingStyle.background = '#99cc00';
    ratingStyle['border-color'] = 'white';
  }
  if (rating >= 5 && rating < 6) {
    ratingStyle.background = '#cccc00';
    ratingStyle['border-color'] = 'white';
  }
  if (rating >= 0 && rating < 5) {
    ratingStyle.background = 'tomato';
    ratingStyle['border-color'] = 'white';
  }
  if (!rating) {
    ratingStyle .background = 'grey';
    ratingStyle['border-color'] = 'white';
  }
  return ratingStyle;
}

export default Film;
