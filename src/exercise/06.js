// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  let submitDisabled = true
  const userNameInputRef = React.useRef(null)

  const handleChange = e => {
    const value = e.target.value.toLower
    const isValid = value === value.toLowerCase()
    if (!isValid) {
      setErrorMessage(isValid ? '' : 'Username must be lower case')
      submitDisabled = true
    } else {
      setUserName(e.target.value)
      setErrorMessage('')
      submitDisabled = false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(userName)
  }
  //
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          onChange={handleChange}
          name="userNameInput"
          type="text"
          value={userName}
        />
        <label>{errorMessage ? errorMessage : ''}</label>
      </div>
      <button
        type="submit"
        disabled={errorMessage !== ''}
        onSubmit={handleSubmit}
      >
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
