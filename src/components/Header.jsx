import React from 'react'
import { ThemeProvider, createTheme,CssBaseline,AppBar,Container,Toolbar,Typography } from '@mui/material';


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
            <AppBar color='transparent' position='static' >
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

                        

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header