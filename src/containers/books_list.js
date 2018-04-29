import React, { Component } from 'react'
import BookListItem from '../components/book_list_item'    
import NewBookForm from "../components/new_book_form"

class BooksList extends Component {
  constructor(props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)

    // TODO: Remove dummy data
    this.state = {
      showModal: false,
      books: [
        {
          title: "Harry Potter"
        },
        {
          title: "Lord of the rings"
        }
      ]
    }

  }

  openModal() {
    this.setState({
      showModal: true
    })

  }  

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  renderBooks() {
    return this.state.books.map(book => {
      return <BookListItem book={book} /> 
    })
  }
  
  render() {
    return(
      <div>
        <NewBookForm closeModal={this.closeModal} shouldShow={this.state.showModal} />
        <h1> Books </h1>
        <small onClick={() => this.openModal()} className="hover-finger"> Add Book </small>
        {this.renderBooks()}
      </div>
    )
  }

}
    
export default BooksList