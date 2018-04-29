import React, { Component } from 'react'

class WordSubstitutionForm extends Component {
  constructor(props) {
    super(props)


    this.setCurrentSub = this.setCurrentSub.bind(this)
    this.state = {
      currentSub: ""
    }
  }


  setCurrentSub(newValue) {
    this.setState({
      currentSub: newValue
    })

    console.log(this.state.currentSub)
  }
  
  render() {
    if(this.props.show) {
      return(
        <div className="word-substitution-form">
          <form >
            This is a form.
            <small onClick={this.props.closeForm}> Close</small>
            <ul>
              <li>
                <label> 
                  <input 
                    type="radio" 
                    name="substitution" 
                    value="option1"
                    onClick={() => this.setCurrentSub("RAIDO VALUE: A1")} /> 
                  Option : A1
                </label>
              </li>
              <li>
                <label> 
                  <input 
                    type="radio" 
                    name="substitution" 
                    value="option1"
                    onClick={() => this.setCurrentSub("RAIDO VALUE: A2")} /> 
                  Option : A2
                </label>
              </li>
              <li>
                <label> 
                  <input 
                    type="radio" 
                    name="substitution" 
                    value="option1"
                    onClick={() => this.setCurrentSub("RAIDO VALUE: B1")} /> 
                  Option : B1
                </label>
              </li>

              <li>
                <input type="text" name="substitution" value="option1" placeholder="Custom" />
              </li>
            </ul>

            <button type="submit" className=" btn btn-primary btn-inline" value="multi-replace"> Multi </button>
            <button type="submit" className=" btn btn-success btn-inline" value="multi-replace"> Single </button>
          </form>
        </div>
      ) // show
    } else {
      return <span></span>
    }
  }

}

export default WordSubstitutionForm