import React from 'react'
import { UserConsumer } from './CUserContext'

function ContextComponent3() {
  return (
    <UserConsumer>
    {username => <h2>Hello {username.id}-{username.user}</h2>}
  </UserConsumer>
  )
}

export default ContextComponent3