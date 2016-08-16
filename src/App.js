import React, { Component } from 'react'
import Hangman from './Hangman'
import Word from './Word'
import Board from './Board'
import './App.css'
import words from './words.json'
import Win from './Win'
import Lose from './Lose'
import Err from './Err'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentNumWrongGuesses: 0,
      solution: 'STUFF',
      used: [],
      matched: [],
      currentScreen: 'game'
    }
  }
  chooseWord = () => {
    let choice = words[Math.floor(Math.random() * words.length)]
    this.setState({solution: choice})
    console.log(this.state.solution)
  }
  onPlay = (letter) => {
    let used = this.state.used
    let matched = this.state.matched
    let solution = this.state.solution
    let match = false
    this.state.used.push(letter)
    for (let i = 0; i < solution.length; i++) {
      if (letter === solution[i]) {
        matched.push(letter)
        match = true
      }
    }
    if (match) {
      match = false
      if (matched.length === solution.length) {
        setTimeout(() => {
          this.setState({ currentScreen: 'win' })
      }, 500)
      }
    } else this.setState({ currentNumWrongGuesses: this.state.currentNumWrongGuesses + 1 })
    if (this.state.currentNumWrongGuesses === 6) {
      setTimeout(() => {
        this.setState({currentScreen: 'lose'})
      }, 500)
    }
    this.setState({
      used: used,
      matched: matched,
      solution: solution
    })

  }
  render () {
    let hangImage
    if (this.state.currentScreen === 'game') {
        switch (this.state.currentNumWrongGuesses) {
          case 1: hangImage = <Hangman image='http://new-box.surge.sh/hang1.png' />
            break
          case 2: hangImage = <Hangman image='http://new-box.surge.sh/hang2.png' />
            break
          case 3: hangImage = <Hangman image='http://new-box.surge.sh/hang3.png' />
            break
          case 4: hangImage = <Hangman image='http://new-box.surge.sh/hang4.png' />
            break
          case 5: hangImage = <Hangman image='http://new-box.surge.sh/hang5.png' />
            break
          case 6: hangImage = <Hangman image='http://new-box.surge.sh/hang6.png' />
            break
          case 7: hangImage = <Hangman image='http://new-box.surge.sh/hang7.png' />
            break
          default: hangImage = <Hangman image='http://cdn.marketplaceimages.windowsphone.com/v8/images/c8284977-a6c7-4061-a185-6aa16c64f64a?imageType=ws_icon_large' />
        }
      return <div className='App'>
          {hangImage}
          <button className="choice" onClick={this.chooseWord} >CHOOSE NEW WORD</button>
          <Word solution={this.state.solution} used={this.state.used}/>
          <Board onPlay={this.onPlay}/>
        </div>
      } else if (this.state.currentScreen === 'win') return <Win solution={this.state.solution}/>
      else if (this.state.currentScreen === 'lose') return <Lose solution={this.state.solution} />
      else return <Err />
  }
}

export default App
