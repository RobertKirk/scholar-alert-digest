import React, {useState} from "react"
import PropTypes from "prop-types"

import {selectLabel} from "effects"

import "containers/containers.css"

const Labels = ({currentLabel, labels, setLabel, setPapers, setView}) => {
  const [checked, check] = useState(currentLabel || labels[0])

  return (
    <form
      data-testid="labels"
      onSubmit={selectLabel({setView, setLabel, setPapers})(checked)}
    >
      <h1>Select a gmail label to aggregate</h1>
      <ul className="labels__list">
        {labels.map(label => (
          <li key={label}>
            <label htmlFor={label} className="labels__label">
              <input
                id={label}
                className="labels__radio"
                type="radio"
                name={label}
                value={label}
                checked={checked === label}
                onChange={_ => check(label)}
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
      <button className="labels__submit" type="submit">
        Save and view report
      </button>
    </form>
  )
}

Labels.defaultProps = {
  currentLabel: "",
}

Labels.propTypes = {
  currentLabel: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLabel: PropTypes.func.isRequired,
  setPapers: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
}

export default Labels
