import React from 'react'
import Film from '../Component/film'
import { detailFilm } from '../api'

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
    if(!data) {
      return (<div><h1>{"Loading..."}</h1></div>);
    } else {
    return <div><Film {...data} /></div>
    }
  }
}

export default Prev;

