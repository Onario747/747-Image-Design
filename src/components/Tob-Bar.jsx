import React from 'react'

const TopBar = ({setInputValue, searchImage}) => {
  return (
    <div className='topBar'>
      <div className="top-bar">
        <div className="header">
          <h1>747 Image Domain</h1>
        </div>

        <div className="input-el">
          <input 
            type="text"
            placeholder='Type something to search...'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={searchImage}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default TopBar