import React from 'react'
import Film from '../Component/film'
import { detailFilm } from '../api'
import { Loading } from 'cerebro-ui'

export class Prev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    const { id } = this.props;
    detailFilm(id).then(data => this.setState({ data }))
  }
  render() {
    const { data } = this.state;
    return (data) ? <div><Film {...data} /></div>
                  : <div><Loading /></div>
  }
}

export default Prev;

