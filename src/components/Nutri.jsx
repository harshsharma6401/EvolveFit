import React from 'react'
import { ThemeProvider, Stack, Typography, Button, Box,Grid, Tooltip } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { darkTheme } from './Header';
import { useState } from 'react';
import Target from './Target';
import  '../App.css'
import Piechart from './PieChart';
import { useNavigate } from 'react-router-dom';

const Nutri = ({calorieTarget,calorieIntake,dataEntry , totalNutri, nutrientData,userId}) => {

    const target = Number(calorieTarget);    
    console.log(dataEntry,totalNutri);

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={darkTheme}>
           <Stack className ="minimal-piechart" direction="row" spacing={3} alignItems="center" style={{marginLeft:40}}>  {/*sx= {{pl:15}} */}
              
            <Piechart dataEntry ={dataEntry} totalNutri ={totalNutri} nutrientData = {nutrientData} />

            <Stack  className ="pie-label-stack" > 
            <Typography  sx={{  fontFamily:'Montserrat',fontWeight:600}} >{calorieIntake} </Typography>
            <Typography   style ={{  fontSize : '8px'}}  >Calories</Typography>
            </Stack >

            {/* <Typography  className ="pie-label-2" sx={{  py: 10,px:1,fontSize : '12px',color: '#BDBCBE',fontFamily:'Montserrat'}} >Calories</Typography> */}
            <Target target = {target}  isSteps = {false}/>
            <Box sx = {{ display: 'flex', alignItems:'center'}}> <Button onClick={()=>{navigate(`/nutrition/${userId}`)}} size="small" sx ={{ color:'text.primary', bgcolor:'#101317', px:0,minWidth:'30px',height:'70px'}}>  <ArrowForwardIosIcon></ArrowForwardIosIcon></Button></Box> 
            
            </Stack>
        </ThemeProvider>
    )
}

export default Nutri