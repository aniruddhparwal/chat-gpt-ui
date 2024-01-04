import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


function Assistant() {
  const [key, setKey] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem('assistantKey', JSON.stringify(key))
    setKey('')
  }

  return (
    <div>
      <h1>Assistant</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Key
        </button>
      </form>
    </div>
  )
}

export default Assistant