import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeProvider, Stack, Paper, Typography, Button } from '@mui/material'
import { useState } from 'react';
import { darkTheme } from './Header';
import Target from './Target';

const Steps = ({ Steps, target }) => {

    const steps = Number(Steps);
    const targetSteps = Number(target);

    const [stepTarget, setstepTarget] = useState(targetSteps);

    function handleTarget(status) {
        status === 'true' ? setstepTarget(stepTarget + 500) : setstepTarget(stepTarget - 500);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Stack direction="row" spacing={3} alignItems="center">
                <div style={{ width: 70, height: 70 }}>
                    <CircularProgressbarWithChildren value={steps} maxValue={stepTarget} styles={buildStyles({
                        pathColor: `#7FD18C`, textColor: '#FFF',
                    })} >
                        <div style={{ fontSize: 14, fontFamily: 'Montserrat' }}>
                            <strong>{steps}</strong>
                        </div>
                        <p style={{ fontSize: 9, color: '#BDBCBE', fontFamily: 'Montserrat', marginTop: -2 }}>Walked</p>
                        {/* Secondary color */}
                    </CircularProgressbarWithChildren>
                </div>

                <Target target={stepTarget} handleTarget={handleTarget} />
            </Stack>

        </ThemeProvider >
    )
}

export default Steps