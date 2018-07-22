import React from 'react'
import Film from '../Component/film'
import { detailFilm } from '../api'
import { Loading } from 'cerebro-ui'

export class Prev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailFilm: null
    }
  }
  componentDidMount() {
    const { id } = this.props;
    detailFilm(id).then(data => {
      const detailFilm = transformDetailFilm(data);
      this.setState({ detailFilm });
    })
  }
  render() {
    const { detailFilm } = this.state;
    return (detailFilm) ? <Film {...detailFilm}/>
                  : <Loading />
  }
}
const transformDetailFilm = (detailFilmToParse) => {
  const detailFilm = detailFilmToParse;
  if (Array.isArray(detailFilm.cast)) 
    detailFilm.cast = detailFilm.cast.slice(0,6).join(' ');
  return detailFilm;
}

export default Prev;

