import React, { Component } from 'react'
import './App.css'

class Lose extends Component {
  reset = () => {
    window.location.reload()
  }
  render () {
    return <div className='Lose'>
      <h1>YOU LOSE</h1>
      <h3>The Word Was : {this.props.solution} </h3>
      <button onClick={this.reset} className='choice'>CLICK HERE TO PLAY AGAIN</button>
    </div>
  }
}

export default Lose
