import React from 'react'
import styles from './styles.css'

/*TODO - add min to duration prop
       - Fix/erase imdbRating, idmbVotes, Genre, Released
*/

export const Film = (({
  title, year, poster_big, sinopsis, director,
  script, rating, duration, cast
}) => {
  return (
    <div className={styles.imdbPreview}>
      <div className={styles.imdbHeader}>
        <div className={styles.imdbTitle}>
          <span>{title}</span>
          <span className={styles.imdbYear}>({year})</span>
        </div>
      </div>
      <div className={styles.imdbMeta}>
        { rating && <span>{rating}</span> }
        { duration && <span>{duration}</span> }
        { year && <span>{year}</span> }
      </div>
      <div className={styles.imdbMain}>
        { poster_big && <img src={poster_big} className={styles.imdbPoster} /> }
      </div>
      <dl className={styles.imdbDetails}>
        <dt>Directors:</dt>
        <dd>{director}</dd>
        <dt>Writers:</dt>
        <dd>{script}</dd>
        <dt>Stars:</dt>
        <dd>{cast}</dd>
      </dl>
    </div>
    )
  }
)

export default Film;