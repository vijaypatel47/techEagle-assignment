import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ParticipantEntryPage from './components/ParticipantEntryPage'
import RaceTrackPage from './components/RaceTrackPage'
import ResultsPage from './components/ResultsPage'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ParticipantEntryPage} />
      <Route path="/race" exact component={RaceTrackPage} />
      <Route path="/results" exact component={ResultsPage} />
    </Switch>
  </Router>
)

export default App
