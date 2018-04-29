import React, { Component } from 'react'

class Word extends Component {
  constructor(props) {
    super(props)

    let word = {
      word: "car",
      level: "a1",
      synonyms: ["auto", "truck"]
    }

    this.state = {
      word: word.word,
      level: word.level,
      synonyms: word.synonyms
    }

  }
  
  render() {
    return(
      <span>
        {this.state.word}
      </span>
    )
  }

}

export default Word