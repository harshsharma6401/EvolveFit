import React from 'react'
import { ThemeProvider } from '@mui/material'
import UserRow from '../UserRow'
import { darkTheme } from '../Header'
import Users from '../../users.json'

const HomePage = () => {

    const UserRows = Users.map((user)=>{
      return (
        <UserRow key = {user.userId} User = {user}/>
      )
    })

  return (
    <ThemeProvider theme ={darkTheme}>
      {UserRows}
      </ThemeProvider>
  )
}

export default HomePage