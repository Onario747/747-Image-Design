import React from 'react'

const ResultText = ({inputValue, showResultMsg}) => {
  return (
    <div className='Result-Text'>
      {showResultMsg && <div className="result-text">
      <p>You Searched For {inputValue}</p>
      </div>}
    </div>
  )
}

export default ResultText