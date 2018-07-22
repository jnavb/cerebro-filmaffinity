import React from 'react'
import styles from './styles.css'

export const Film = (({
  title, year, poster_big, sinopsis, director,
  script, rating, duration, cast, ratingBackground
}) => {
  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <div className={styles.rating} style={ratingBackground}>  
          {rating ? <span>{rating}</span>
                  : <span>N/A</span>}
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.image}>
          <img src={poster_big} className={styles.imagePoster}/> 
          <div className={styles.imageFooter}>
            { duration && <span>{duration} min.</span> }
            { year && <span>{year}</span> }
          </div>
        </div>
        <dl className={styles.details}>
          {director && <dt>Directors</dt>}
          <dd>{director}</dd>
          {script && <dt>Writers</dt>}
          <dd>{script}</dd>
          {cast && <dt>Stars</dt>}
          <dd>{cast}</dd>
        </dl>  
      </div>
      <div className={styles.sinopsis}>{sinopsis}</div>
    </div>
    )
  }
)

export default Film;
