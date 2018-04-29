import React from "react"

export default (props) => {

  return(
    <a
      key={props.chapter.title}
      className="list-group-item list-group-item-action active hover-finger"> {props.chapter.title} </a>
  )
}