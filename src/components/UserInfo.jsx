import React from 'react'
import { Box, Stack, styled, Paper, Typography,ThemeProvider } from '@mui/material';

import profileImage from '../assets/profileImage.png';

import { darkTheme } from './Header';

const Item = styled(Paper)(({ theme = darkTheme}) => ({
    backgroundColor: '#1E262F',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: "center",
}));



const UserInfo = () => {
    return (
        <ThemeProvider theme= {darkTheme}>

          
            <Stack direction="row" spacing={3}  alignItems="center">
                
                <img src={profileImage} alt="profileImage" width="100%" height ="60%" />
    
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={0}>
                        <Typography  sx={{
                            fontFamily: "Montserrat",
                            fontSize: '0.9rem',
                            fontWeight: '500',
            
                        }}> Lorelai Gilmore   </Typography>
                        <Typography sx={{
                            fontFamily: "Montserrat",
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            color: 'text.secondary',
                          
                        }}>lorelaigilmore25@gmail.com</Typography>

                    </Stack>
                </Box>
            </Stack>
           
           
            </ThemeProvider>
    )
}

export default UserInfo