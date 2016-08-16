import React, { Component } from 'react'
import './App.css'

class Win extends Component {
  reset = () => {
    window.location.reload()
  }
  render () {
    return <div className='Win'>
      <h1>YOU WIN</h1>
      <h3>The Word Was {this.props.solution}</h3>
      <button onClick={this.reset} className='choice'>CLICK HERE TO PLAY AGAIN</button>
    </div>
  }
}

export default Win
