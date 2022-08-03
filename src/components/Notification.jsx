import { Button, ThemeProvider ,Box} from '@mui/material'
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import React from 'react'
import { darkTheme } from './Header'


const Notification = () => {
  return (
    <ThemeProvider theme = {darkTheme}>
     <Box sx = {{ display: 'flex', alignItems:'center'}}> <Button size='large' sx ={{minWidth:'50px',height:'50px', bgcolor:'#36F5C7',color:'#000',borderRadius:2}}>  <NotificationsNoneSharpIcon > </NotificationsNoneSharpIcon>  </Button></Box>
    </ThemeProvider>
  )
}

export default Notification