import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import journalEntrystyles from './journalEntries.module.scss'

const JournalEntries = () => {
  const data = useStaticQuery(graphql`
   query {
      allContentfulJournalEntry {
        nodes {
          title,
          created,
          slug,
          body {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      {data.allContentfulJournalEntry.nodes.map((entry, i) => {
        return ([
          <div className={journalEntrystyles.entryContianer}>
            <Link key={i} to={`/journal/${entry.slug}`}><h2 key={i}>{entry.title}</h2></Link>
            <p key={`${i}date`} className={journalEntrystyles.timeStamp}>Added: {entry.created}</p>
            <p key={`${i}content`}>{entry.body.content[0].content[0].value}</p>
          </div>
          ])
      })}
    </div>
  )
}

export default JournalEntries