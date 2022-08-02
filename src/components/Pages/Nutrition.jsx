import React from 'react'
import { useParams } from "react-router-dom";
import { Typography,Container,ThemeProvider } from '@mui/material';
import { darkTheme } from '../Header';

const Nutrition = () => {

  const { userId} = useParams();


  return (
    <ThemeProvider theme ={darkTheme}>
      <Container style={{marginTop:100}}>
      <Typography>Nutrition of {userId} </Typography>
      </Container>
      </ThemeProvider>
     
    
  )
}

export default Nutrition