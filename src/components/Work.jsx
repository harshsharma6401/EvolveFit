import React from 'react'
import { ThemeProvider, Stack, Typography, Button,Box } from '@mui/material'

import  userCheck from '../assets/user-check.png'
import eventSchedule from '../assets/event-schedule.png'
import { darkTheme } from './Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Work = () => {
  
  const performedDate = '15 Oct';
  const scheduledDate = '22 Oct';

  return (
    <ThemeProvider theme ={darkTheme}>
       <Stack  direction="row" >
       <Stack spacing={2} alignItems="center"  sx ={{py:1}} >

        <Stack direction="row"  sx ={{mt:0.5}} alignItems="center" >
      
        <img src= {userCheck} alt="userCheck" width ='22px' height='20px'/> 
        <Typography sx={{px:1,fontFamily:'Montserrat',fontWeight:600}}>{performedDate}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
       
          {/* If scheduled date is current date ,add sx prop to this stack */}
          {/* sx ={{bgcolor:'#CC3838',borderRadius:2,px:1,py:1}} */}
       
        <img src= {eventSchedule} alt="eventSchedule" width ='22px' height='20px' /> 
        <Typography sx={{px:1 ,fontFamily:'Montserrat',fontWeight:600}}>{scheduledDate}</Typography>
        </Stack>

       </Stack>

         <Box sx = {{ display: 'flex', alignItems:'center'}}> <Button  size="small" sx ={{ color:'text.primary', bgcolor:'#101317', mx : 1 , px:0,minWidth:'30px',height:'70px'}}>  <ArrowForwardIosIcon></ArrowForwardIosIcon></Button></Box> 
       
       </Stack>

      </ThemeProvider>
  )
}

export default Work