import React, { useState } from 'react'

function Home() {
  //need to add api key and set to local storage

  const [apiKey, setApiKey] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem('apiKey', JSON.stringify(apiKey))
    setApiKey('')
  }

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Key
        </button>
      </form>
    </div>
  )
}

export default Home