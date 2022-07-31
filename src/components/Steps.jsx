import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeProvider, Stack, Paper, Typography, Button } from '@mui/material'

import { darkTheme } from './Header';


const Steps = () => {
    const steps = 2547;
    const maxSteps = 4000;
    return (
        <ThemeProvider theme={darkTheme}>
            <Stack direction="row" spacing={3} alignItems="center">
                <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={steps} maxValue={maxSteps} styles={buildStyles({
                        pathColor: `#7FD18C`, textColor: '#FFF',
                    })} >
                        <div style={{ fontSize: 14, fontFamily: 'Montserrat' }}>
                            <strong>{steps}</strong>
                        </div>
                        <p style={{ fontSize: 9, color: '#BDBCBE', fontFamily: 'Montserrat', marginTop: -2 }}>Walked</p>
                        {/* Secondary color */}
                    </CircularProgressbarWithChildren>
                </div>
                <Stack spacing={0} alignItems="center" >


                    <Button size="small" sx={{color: 'text.primary', fontWeight : '900',textAlign: 'center', bgcolor: '#101317', minWidth: 9 / 10, py: 0 }} >+</Button>

                    <Typography sx={{ textAlign: 'center', fontWeight: 700,  fontSize: '16px',mt: 1/2}}>
                        {maxSteps / 1000}K
                    </Typography>
                    <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: '12px',mt:-1 ,mb:1/2}}>
                        target
                    </Typography>


                    <Button size="small" sx={{ color: 'text.primary', fontWeight : '900',textAlign: 'center', bgcolor: '#101317', minWidth: 9 / 10, py: 0 }} >-</Button>


                </Stack>
            </Stack>

        </ThemeProvider >
    )
}

export default Steps