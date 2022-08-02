import React from 'react'
import { darkTheme } from './Header'
import { ThemeProvider, LinearProgress, Paper, Tooltip, Typography, createTheme } from '@mui/material'

const Macros = () => {

    const styles = () => ({
        colorPrimary: {
            backgroundColor: '#00695C',
        },
        barColorPrimary: {
            backgroundColor: '#B2DFDB',
        }
    });

    const progressTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                paper: '#1E262F',
            },
            text: {
                primary: '#F45C84',
                secondary: '#F0C50F',
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>

            <Paper sx={{width: 300, py: 1, px: 3, borderRadius: 3 }}>

                <Typography>PROTEIN</Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#F45C84',
                    }, height: 10, borderRadius: 10
                }} variant="determinate" value={20} />
                <Typography>FATS</Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#03C6FA',
                    }
                    , height: 10, borderRadius: 10
                }} variant="determinate" value={20} />
                <Typography>CARBS</Typography>
                <LinearProgress sx={{
                    '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: '#F0C50F',
                    }
                    , height: 10, borderRadius: 10
                }} variant="determinate" value={20} />


            </Paper>

        </ThemeProvider>
    )
}

export default Macros