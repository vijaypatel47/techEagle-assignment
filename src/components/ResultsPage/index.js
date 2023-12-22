import './index.css'

const ResultsPage = props => {
  const {commentDetails} = props
  const {name, speed, start} = commentDetails
  const endTime = speed * 0.27 - start
  return (
    <ul className="listItem">
      <li>{name}</li>
      <li>{speed}</li>
      <li>{start}</li>
      <li>{endTime} </li>
    </ul>
  )
}

export default ResultsPage
