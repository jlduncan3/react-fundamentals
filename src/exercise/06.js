// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const [userName, setUserName] = React.useState('');

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
       setUserName(value);
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(userName);
  }
  //
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input onChange={handleChange} name="userNameInput" type="text" value={userName}/>
      </div>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
