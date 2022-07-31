import React from 'react'
import { Container,Stack,Paper, styled ,ThemeProvider} from '@mui/material'

import UserInfo from './UserInfo';
import Steps from './Steps';

import { darkTheme } from './Header';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const UserRow = () => {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Container>
      <Paper sx  ={{py:1,px:3,borderRadius: 3}}>
      <Stack direction="row" spacing={10}>
        <UserInfo/>
        <Steps/>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      </Paper>
      </Container>
      </ThemeProvider >
  )
}

export default UserRow