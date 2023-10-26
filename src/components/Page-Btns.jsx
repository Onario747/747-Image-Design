import React from 'react'

const PageBtns = ({setPage, page, totalPages}) => {
  return (
    <div className='PageBtns'>
      <div className="page-btns">
        {page > 1 && <button className="btn" onClick={() => setPage(page - 1)}>Previous</button> }
        {page < totalPages && <button className="btn" onClick={() => setPage(page + 1)}>Next</button> }
      </div>
    </div>
  )
}

export default PageBtns