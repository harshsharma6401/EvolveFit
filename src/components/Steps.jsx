import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeProvider, Stack, Paper, Typography, Button } from '@mui/material'

import { darkTheme } from './Header';
import Target from './Target';

const Steps = ({ Steps, stepTarget }) => {

    const steps = Number(Steps);
    const target = Number(stepTarget);

    return (
        <ThemeProvider theme={darkTheme}>
            <Stack direction="row" spacing={3} alignItems="center">
                <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={steps} maxValue={target} styles={buildStyles({
                        pathColor: `#7FD18C`, textColor: '#FFF',
                    })} >
                        <div style={{ fontSize: 14, fontFamily: 'Montserrat' }}>
                            <strong>{steps}</strong>
                        </div>
                        <p style={{ fontSize: 9, color: '#BDBCBE', fontFamily: 'Montserrat', marginTop: -2 }}>Walked</p>
                        {/* Secondary color */}
                    </CircularProgressbarWithChildren>
                </div>

                <Target target={target} isSteps={true} />
            </Stack>

        </ThemeProvider >
    )
}

export default Steps