import React from 'react'
import { darkTheme } from './Header'
import { ThemeProvider, LinearProgress, Paper, Tooltip, Typography,Box } from '@mui/material'

const Macros = () => {

    return (
        <ThemeProvider theme={darkTheme}>

            <Paper sx={{width: 200, py: 1, px: 0.5, borderRadius: 3 }}>
                <Box sx ={{my:1, py:1, px:1,backgroundColor :"#1B222A" ,borderRadius: 3}} >
                <Typography  display ="inline" sx ={{fontSize :"12px"}}>PROTEIN  </Typography> <Typography display ="inline" sx={{ fontSize :"12px",marginLeft:12}} > {'80g'} </Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#F45C84',
                    }, height: 10, borderRadius: 10
                }} variant="determinate" value={20} />
                </Box>
                <Box sx ={{my:1, py:1, px:1,backgroundColor :"#1B222A" ,borderRadius: 3}} >
                <Typography display ="inline" sx ={{fontSize :"12px"}}>FATS</Typography> <Typography display ="inline" sx={{ fontSize :"12px",marginLeft:15}} > {'80g'} </Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#03C6FA',
                    }
                    , height: 10, borderRadius: 10
                }} variant="determinate" value={20} />
                  </Box>
                  <Box sx ={{my:1, py:1, px:1,backgroundColor :"#1B222A" ,borderRadius: 3}} >
                <Typography display ="inline" sx ={{fontSize :"12px"}}>CARBS</Typography> <Typography display ="inline" sx={{ fontSize :"12px",marginLeft:13.5}} > {'80g'} </Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#F0C50F',
                    }
                    , height: 10, borderRadius: 10
                }} variant="determinate" value={20} />
                  </Box>

            </Paper>

        </ThemeProvider>
    )
}

export default Macros