import React from 'react'
import { Box, Stack, Typography, ThemeProvider } from '@mui/material';
import profileImage from '../assets/profileImage.png';
import { darkTheme } from './Header';


const UserInfo = ({ name, email }) => {

    return (
        <ThemeProvider theme={darkTheme}>


            <Stack direction="row" spacing={3} alignItems="center">

                <img src={profileImage} alt="profileImage" width="100%" height="60%" />

                <Box sx={{ width: '100%' }}>
                    <Stack spacing={0}>
                        <Typography sx={{
                            fontFamily: "Montserrat",
                            fontSize: '0.9rem',
                            fontWeight: '500',

                        }}> {name}  </Typography>
                        <Typography sx={{
                            fontFamily: "Montserrat",
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            color: 'text.secondary',

                        }}> {email}</Typography>

                    </Stack>
                </Box>
            </Stack>


        </ThemeProvider>
    )
}

export default UserInfo