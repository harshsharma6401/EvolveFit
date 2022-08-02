import React from 'react'
import { ThemeProvider, createTheme,CssBaseline,AppBar,Container,Toolbar,Typography } from '@mui/material';
import Gym from '../assets/gym.png'
import Steps from '../assets/Steps.png'
import  Nutrition from '../assets/Nutrition.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        paper: '#1E262F',
      },
    text: {
        primary: '#FFF',
        secondary: '#BDBCBE',
      },
  },
});

const Header = () => {

    console.log(darkTheme)

    return (
        <ThemeProvider theme= {darkTheme}>
             <CssBaseline />
            <AppBar sx ={{backgroundColor:"#000"}} position='fixed' >
                <Container>
                    <Toolbar>
                        <Typography variant="h5"
                            sx={{
                                flex: 1,
                                color: "#B2A4FF",
                                fontFamily: "Montserrat",
                                fontWeight: "bolder",
                                cursor: "pointer",
                            }}
                        >
                            EvolveFit
                        </Typography>

                          <img src={Steps} alt="Steps" />  
                        <Typography variant="h5"
                            sx={{
                                flex: 1,
                                color: "text.primary",
                                fontFamily: "Montserrat",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                ml:1
                            }}
                        >
                         Steps
                        </Typography>
                        <FitnessCenterIcon/>
                        <Typography variant="h5"
                            sx={{
                                flex: 1,
                                color: "text.primary",
                                fontFamily: "Montserrat",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                ml:1,
                            }}
                        >
                         Workout
                        </Typography>
                        <img src={Nutrition} alt="Nutrition" />  
                        <Typography variant="h5"
                            sx={{
                                flex: 1,
                                color: "text.primary",
                                fontFamily: "Montserrat",
                                fontWeight: "bolder",
                                cursor: "pointer",
                                ml:1,
                            }}
                        >
                         Nutrition
                        </Typography> 

                    </Toolbar>
                    
                </Container>
            </AppBar>
             
                            
        </ThemeProvider>
    )
}

export default Header