import React, { Component } from 'react'
import './App.css'

class Err extends Component {
  reset = () => {
    window.location.reload()
  }
  render () {
    return <div className='Err'>
      <h1>ERROR</h1>
      <button onClick={this.reset} className='choice'>CLICK HERE TO PLAY AGAIN</button>
    </div>
  }
}

export default Err
