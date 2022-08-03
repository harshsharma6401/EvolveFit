import { ThemeProvider, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { darkTheme } from './Header'


const Target = ({ target, handleTarget }) => {

    return (
        <ThemeProvider theme={darkTheme} >  <Stack spacing={0} alignItems="center" >


            <Button onClick={() => handleTarget('true')}
                size="small"
                sx={{ color: 'text.primary', fontWeight: '900', textAlign: 'center', bgcolor: '#101317', py: 0 }} >+</Button>

            <Typography sx={{ textAlign: 'center', fontWeight: 700, fontSize: '16px', mt: 1 / 2 }}>
                {target / 1000}K
            </Typography>
            <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: '12px', mt: -1, mb: 1 / 2 }}>
                target
            </Typography>


            <Button onClick={() => handleTarget('false')}
                size="small"
                sx={{ color: 'text.primary', fontWeight: '900', textAlign: 'center', bgcolor: '#101317', py: 0 }} >-</Button>


        </Stack>
        </ThemeProvider>
    )
}

export default Target