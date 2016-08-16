import React, { Component } from 'react'
import './App.css'

class Board extends Component {
  render () {
    return (
      <div className='Board'>
        <Alphabet onPlay={this.props.onPlay}/>

      </div>
    )
  }
}

class Alphabet extends Component {
  wholeAlphabet () {
    return [...Array(26).keys()].map(
      (i,index) => <AlphaLetter onPlay={this.props.onPlay} key={index} character={String.fromCharCode(65 + i)} />
    )
  }
  render () {
    return (
      <div className='AlphaLetter'>
        {this.wholeAlphabet()}
      </div>
    )
  }
}

class AlphaLetter extends Component {
  constructor () {
    super()
    this.state = {
      disabled: false
    }
  }
  getLetter = () => {
    this.props.onPlay(this.props.character)
    this.setState({ disabled: true })
  }
  render () {
    return <button disabled={this.state.disabled} onClick={this.getLetter}>{this.props.character}</button>;
  }
}
 export default Board
