import React from 'react'
import DeckButton from "./deckButton"
import { Link, graphql, useStaticQuery } from "gatsby"

const DeckSelect = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata {
          title
        }
      }
    }
  `)
  return(
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>Deck select</h2>
      <DeckButton text={'Fountain Tarot'} value={'Fountain'} method={props.onDeckSelect}/>
      <DeckButton text={'Linestrider Tarot'} value={'Linestrider'} method={props.onDeckSelect}/>
      <p>or...</p>
      <Link to="/journal">Go to my Journal</Link>
    </div>
  )
}

export default DeckSelect