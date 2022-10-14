import './App.css'
import { useState } from 'react'
import Greeting from './Components/Greeting'
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Mailbox from './Components/Mailbox'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [unreadMessages, setUnreadMessages] = useState(['hello', 'hi', 'howdy'])

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  let button
  let mailbox = isLoggedIn && <Mailbox unreadMessages={unreadMessages} />

  if (isLoggedIn) {
    button = <LogoutButton onClick={logout} />
  } else {
    button = <LoginButton onClick={login} />
  }

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      <p>
        You are <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in
      </p>
      {button}
      {mailbox}
    </>
  )
}

export default App
