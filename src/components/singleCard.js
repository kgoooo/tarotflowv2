import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import singleCardStyles from './singleCard.module.scss'

const SingleCard = () => {
  const data = useStaticQuery(graphql`
   query {
      allContentfulTarotCard {
          nodes {
            cardName,
            cardImage {
              file {
                url
              }
            },
            cardTitle,
            cardDescription {
              cardDescription
            },
            cardMeaning {
              cardMeaning
            },
            cardReversal {
              cardReversal
            }
          }
        }
      }
  `)

  return (
    <div>
      <p>Single Card:</p>
      <div className={singleCardStyles.imgContainer}>
        <img alt='Card' className={singleCardStyles.fullsizeImage} src={data.allContentfulTarotCard.nodes[0].cardImage.file.url}/>
      </div>
      <div className={singleCardStyles.container}>
        <h6>{data.allContentfulTarotCard.nodes[0].cardTitle}</h6>
        <p>{data.allContentfulTarotCard.nodes[0].cardDescription.cardDescription}</p>
        <p><span>Card Meaning:</span> {data.allContentfulTarotCard.nodes[0].cardMeaning.cardMeaning}</p>
        <p><span>Card Reversal:</span> {data.allContentfulTarotCard.nodes[0].cardReversal.cardReversal}</p>
      </div>
    </div>
  )
}

export default SingleCard