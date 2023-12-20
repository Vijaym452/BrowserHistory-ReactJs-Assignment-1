import './index.css'

const HistoryItem = props => {
  const {history, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-opened">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="title-url">
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
