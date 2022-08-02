import React from 'react'
import { Container, ThemeProvider } from '@mui/material'
import UserRow from '../UserRow'
import { darkTheme } from '../Header'
import Users from '../../users.json'


const HomePage = () => {

  const UserRows = Users.map((user) => {
    return (
      <UserRow key={user.userId} User={user} />
    )
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ marginTop: 100 }}>
        {UserRows}
      </Container>
    </ThemeProvider>
  )
}

export default HomePage