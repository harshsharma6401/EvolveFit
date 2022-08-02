import React from 'react'
import { ThemeProvider, Stack, Typography, Button, Box } from '@mui/material'

import userCheck from '../assets/user-check.png'
import eventSchedule from '../assets/event-schedule.png'
import { darkTheme } from './Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useNavigate } from 'react-router-dom';



const Work = ({ performedDate, scheduledDate, userId, feedback }) => {

  const monthNames = ["Jan", "Feb", "March", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const split1 = performedDate.split('/');
  const split2 = scheduledDate.split('/');

  const PerformedDate = split1[0] + ' ' + monthNames[split1[1] - 1];
  const ScheduledDate = split2[0] + ' ' + monthNames[split2[1] - 1];

  const navigate = useNavigate();

  function checkDate(scheduledDate) {


    let [d, m, y] = scheduledDate.split(/\D/);

    let d1 = new Date(y, m - 1, d);
    let d2 = new Date();

    return d1.getFullYear() === d2.getFullYear() && d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth();

  }

  let isScheduled = checkDate(scheduledDate);

  const styles = {
    alertStyle: {

      backgroundColor: '#CC3838',
      borderRadius: '8px',
      padding: '4px 4px',

    },
    normal: {

    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Stack direction="row"   >
        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ py: 1, }} >

          <Stack className="dateStack" direction="row" sx={{ mt: 0.5 }} alignItems="center" >

            <img src={userCheck} alt="userCheck" width='22px' height='20px' />
            <Typography sx={{ px: 1, fontFamily: 'Montserrat', fontWeight: 600 }}>{PerformedDate}</Typography>
          </Stack>

          <Stack className="dateStack" direction="row" alignItems="center" style={isScheduled ? styles.alertStyle : styles.normal} >

            {/* If scheduled date is current date ,add sx prop to this stack */}
            {/* sx ={{bgcolor:'#CC3838',borderRadius:2,px:1,py:1}} */}

            <img src={eventSchedule} alt="eventSchedule" width='22px' height='20px' />

            <Typography sx={{ px: 1, fontFamily: 'Montserrat', fontWeight: 600 }}>{ScheduledDate}</Typography>
          </Stack>

        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          {!feedback ? <><Button onClick={() => { navigate(`/workout/${userId}`) }} size="small" sx={{ color: 'text.primary', bgcolor: '#101317', mx: 1, px: 0, minWidth: '30px', height: '70px' }}> <ArrowForwardIosIcon></ArrowForwardIosIcon> </Button></>
            :
            <> <Button onClick={() => { navigate(`/workout/${userId}`) }} size="small" sx={{ color: 'text.primary', mx: 1, minWidth: '30px', height: '70px', bgcolor: '#CC3838', borderRadius: 2, px: 0.5, py: 0.5 }}>  <PriorityHighIcon></PriorityHighIcon></Button></>}

        </Box>

      </Stack>

    </ThemeProvider>
  )
}

export default Work