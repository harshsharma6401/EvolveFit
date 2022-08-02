
import { ThemeProvider, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { darkTheme } from './Header'
import { useState } from 'react'

const Target = ({ target, isSteps }) => {

    const [steps, setSteps] = useState(target);


    return (
        <ThemeProvider theme={darkTheme} >  <Stack spacing={0} alignItems="center" >


            <Button onClick={()=> {isSteps?setSteps(steps+500):setSteps(steps+100) }}
                size="small"
                sx={{ color: 'text.primary', fontWeight: '900', textAlign: 'center', bgcolor: '#101317', minWidth: 9 / 10, py: 0 }} >+</Button>

            <Typography sx={{ textAlign: 'center', fontWeight: 700, fontSize: '16px', mt: 1 / 2 }}>
                {steps / 1000}K
            </Typography>
            <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: '12px', mt: -1, mb: 1 / 2 }}>
                target
            </Typography>


            <Button onClick={()=> {isSteps?setSteps(steps-500):setSteps(steps-100) }}
            size="small" 
            sx={{ color: 'text.primary', fontWeight: '900', textAlign: 'center', bgcolor: '#101317', minWidth: 9 / 10, py: 0 }} >-</Button>


        </Stack>
        </ThemeProvider>
    )
}

export default Target