import React, { Component } from 'react'
import ChapterListItem from "../components/chapter_list_item"
import NewChapterForm from "../components/new_chapter_form"

class ChaptersList extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)

    this.state = {
      showModal: false,
      showChapters: true,

      chapters: [
        {
          title: "Chapter one"
        },
        {
          title: "Chapter Two"
        },
        {
          title: "Chapter Three"
        }
      ]
    }

  }

  openChaptersMenu() {
    this.setState({
      showChapters: true
    })
  } 

  closeChaptersMenu() {
    this.setState({
      showChapters: false
    })
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


  renderChapters() {
    return this.state.chapters.map(chapter => {
      return <ChapterListItem chapter={chapter} />
    })
  }

  render() {

    if(this.state.showChapters) {
      return(
        <div className="chapter-list">
          <NewChapterForm closeModal={this.closeModal} shouldShow={this.state.showModal} />

          <h4>Chapters</h4>
          <h5 
            className="hover-finger"
            onClick={() => this.closeChaptersMenu()}
            > Close </h5>
          <small onClick={() => this.openModal()} className="hover-finger"> Add Chapter </small>
          <div className="list-group">
            {this.renderChapters()}
          </div> 
        </div>
      )
    } else {
      return(
        <div 
          className="hover-finger"
          onClick={() => this.openChaptersMenu()}
          id="open-chapters-button"
        > 
          OPEN
        </div>
      )
    }
  }// render

}

export default ChaptersList