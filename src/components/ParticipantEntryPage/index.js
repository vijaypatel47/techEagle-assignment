import {Component} from 'react'
import {Link} from 'react-router-dom'
import ResultsPage from '../ResultsPage'
import './index.css'

class ParticipantEntryPage extends Component {
  state = {participantName: '', speedTime: '', startTime: '', commentsList: []}

  renderList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <ResultsPage key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {participantName, speedTime, startTime} = this.state

    const newComment = {
      name: participantName,
      speed: speedTime,
      start: startTime,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      speedTime: '',
      participantName: '',
      startTime: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({
      participantName: event.target.value,
    })
  }

  onChangeSpeedInput = event => {
    this.setState({
      speedTime: event.target.value,
    })
  }

  onChangeStartTimeInput = event => {
    this.setState({
      startTime: event.target.value,
    })
  }

  render() {
    const {participantName, speedTime, startTime} = this.state
    return (
      <div className="bgContainer">
        <form className="detailsContainer" onSubmit={this.onClickAddButton}>
          <h1>Runner Details</h1>
          <p>*You can add Max 10 participants</p>
          <div>
            <p>Name</p>
            <input
              type="text"
              value={participantName}
              onChange={this.onChangeNameInput}
            />
          </div>
          <div>
            <p>Speed</p>
            <input
              type="text"
              value={speedTime}
              onChange={this.onChangeSpeedInput}
            />
          </div>
          <div>
            <p>Start Time</p>
            <input
              type="text"
              value={startTime}
              onChange={this.onChangeStartTimeInput}
            />
          </div>
          <button className="addButton" type="submit">
            + ADD RUNNER
          </button>
        </form>
        <div className="listOfPartiContainer">
          <h1>List of Participants</h1>
          <div className="listTitleName">
            <p>Name</p>
            <p>Speed</p>
            <p>Start Time</p>
            <p>End Time</p>
          </div>
          {this.renderList()}
        </div>
        <div className="aloneButton">
          <Link className="nav-link" to="/race">
            <button className="startRaceButton" type="button">
              Start Race
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ParticipantEntryPage
