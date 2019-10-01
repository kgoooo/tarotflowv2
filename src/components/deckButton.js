import React from 'react'

const DeckButton = (props) => {
  return(
    <button value={props.value} onClick={props.method}>{props.text}</button>
  )
}

export default DeckButton