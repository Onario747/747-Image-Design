import React, { useRef } from 'react';


const ImageKeywords = ({setKeywordBtn}) => {

  const buttonRef = useRef(null);
  return (
    <div className='imageKeywords'>
      <div className="keyword-btns">
        <button ref={buttonRef} onClick={() => console.log("i am being clicked")}>Nature</button>
        <button>Landscapes</button>
        <button>Animals</button>
        <button>Potraits</button>
        <button>Abstact</button>
      </div>
    </div>
  )
}

export default ImageKeywords