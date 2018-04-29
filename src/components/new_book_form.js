import React, { Component } from 'react'

class NewBookForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      title: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("Should submit to the server")
    console.log("Title")
    console.log(this.state.title)
    this.setState({
      title: ""
    })
    this.props.closeModal();
  }

  handleAuthorInput(value) {
    this.setState({
      title: value
    })
  }
  
  render() {

    if(!this.props.shouldShow) {
      return(
        <div>
        </div>
      )
    } else {
      return(
        <div>
          <div id="new-book-form-modal-bkg"> </div>
          <div id="new-book-form" className="form-group"> 
            <form onSubmit={this.handleSubmit}>
              <h2> New Book </h2>
              <span 
                className="glyphicon glyphicon-remove-circle hover-finger" 
                id="close-new-book-form-button"
                onClick={this.props.closeModal}
                >X</span>
              <input 
                placeholder="Title" 
                  type="text" 
                  className="form-control" 
                  name="title" 
                  value={this.state.title}
                  onChange={(event) => this.handleAuthorInput(event.target.value)} />
              <input placeholder="Author" type="text" className="form-control" name="author" />
              <button type="submit" className="btn btn-primary" value="Create">Create</button>
            </form>

          </div>
        </div>
      )
    }


  }// render

}

export default NewBookForm