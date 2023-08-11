import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {id, suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(id)
  }

  return (
    <li className="suggestion-item" onClick={onClickSuggestion}>
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
