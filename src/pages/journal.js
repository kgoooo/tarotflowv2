import React from 'react'
import Header from '../components/header'
import JournalEntries from "../components/journalEntries"

const Journal = () => {
  return(
    <div>
      <Header content={"Journal -Header"}/>
      <h1>Journal page</h1>
      <JournalEntries />
    </div>
  )
}

export default Journal