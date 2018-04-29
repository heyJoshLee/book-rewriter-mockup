import React from "react"

export default (props) => {
  return(
    <li className="hover-finger" key={props.book.title}> {props.book.title} </li>
  )

}