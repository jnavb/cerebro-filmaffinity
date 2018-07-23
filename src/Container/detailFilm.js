import React from 'react'
import Film from '../Component/film'
import { detailFilm } from '../api'
import { Loading } from 'cerebro-ui'
import {transformDetailFilm} from '../func'

export class Prev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmPrev: null,
    }
  }
  componentDidMount() {
    const { id, language } = this.props;
    detailFilm(id, language).then(filmPrev => {
      if (filmPrev){
        filmPrev = transformDetailFilm(filmPrev);
        this.setState({ filmPrev });
      }
    })
  }
  render() {
    const { filmPrev } = this.state;
    
    return (filmPrev) ? <Film {...filmPrev} language={this.props.language} />
                      : <Loading />
  }
}

export default Prev;

