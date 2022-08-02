import React from 'react'
import { Typography, Container, ThemeProvider } from '@mui/material';
import { darkTheme } from '../Header';
import { useParams } from "react-router-dom";

const Workout = () => {

  const { userId } = useParams();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ marginTop: 100 }}>
        <Typography>Workout of {userId} </Typography>
      </Container>
    </ThemeProvider>
  )
}

export default Workout