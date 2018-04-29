import React, { Component } from 'react'
import WordSubstitutionForm from '../containers/word_substitution_form'
class Word extends Component {
  constructor(props) {
    super(props)

    let word = {
      word: "car",
      level: "a1",
      synonyms: ["auto", "truck"]
    }

    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)

    this.state = {
      word: word.word,
      level: word.level,
      synonyms: word.synonyms,
      showForm: false
    }

  }


  showForm() {
    this.setState({
      showForm: true
    })
  }

  closeForm() {
    this.setState({
      showForm: false
    })
  }
  
  render() {
    return(
      <span>
        <span onDoubleClick={this.showForm}>{this.state.word} </span>
        <WordSubstitutionForm show={this.state.showForm} closeForm={this.closeForm} />
      </span>
    )
  }

}

export default Word