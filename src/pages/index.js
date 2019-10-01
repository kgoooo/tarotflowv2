import React from "react"

import Header from '../components/header'
import DeckSelect from "../components/deckSelect"
import SpreadSelect from "../components/spreadSelect"
import SingleCard from "../components/singleCard"
import '../styles/index.scss'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDeckSelect: true,
      showSingleCardView: false,
      showSpreadSelect: false,
      selectedDeck: ''
    }
  }
  onDeckSelect = (e) => {
    this.setState({
      selectedDeck: e.target.value,
      showDeckSelect: false,
      showSpreadSelect: true
    })
  }
  render() {
    return(
      <div>
        {this.state.showDeckSelect ? <DeckSelect onDeckSelect={this.onDeckSelect}/> : null}
        {this.state.showSpreadSelect ? <SpreadSelect content={this.state.selectedDeck}/> : null}
        {this.state.showSingleCardView ? <SingleCard /> : null}
      </div>
    )
  }
}

export default Index