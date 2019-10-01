import React from 'react'
import { graphql, useStaticQuery } from'gatsby'

import Header from './header'
import spreadSelectStyle from './spreadselect.module.scss'

const SpreadSelect = (props) => {
  const data = useStaticQuery(graphql`
   query {
    contentfulCardBack {
      cardBackImage {
        file {
          url
        }
      }
    }
  }
`)
  console.log(data)

  return(
    <div>
      <Header content={props.content}/>
      <h2 className={spreadSelectStyle.spreadTitle}>3 Card Daily Spread</h2>
      <div className={spreadSelectStyle.cardFlex}>
        <div className={spreadSelectStyle.cardCentering}>
          <img alt="back of card" src={data.contentfulCardBack.cardBackImage.file.url}/>
          <p>Past</p>
        </div>
        <div className={spreadSelectStyle.cardCentering}>
          <img alt="back of card" src={data.contentfulCardBack.cardBackImage.file.url}/>
          <p>Present</p>
        </div>
        <div className={spreadSelectStyle.cardCentering}>
          <img alt="back of card" src={data.contentfulCardBack.cardBackImage.file.url}/>
          <p>Future</p>
        </div>
      </div>
    </div>
  )
}

export default SpreadSelect