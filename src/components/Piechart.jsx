import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { ThemeProvider, Typography,Tooltip} from '@mui/material'
import { darkTheme } from './Header';
import '.././App.css';
import Macros from './Macros';

const Piechart = ({dataEntry , totalNutri, nutrientData}) => {

    console.log('Piechartjs : ',dataEntry,totalNutri);

  return (
    <ThemeProvider theme ={darkTheme}>
    
        <Tooltip title = {<Macros nutrientData = {nutrientData} ></Macros>} >
        <div className ='minimal-piechart' >
        <PieChart  lineWidth={20} totalValue={totalNutri} radius= {PieChart.defaultProps.radius - 6}
                    data={dataEntry}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                        animate
                        labelStyle={{
                            fill: '#fff',
                            opacity: 0.75,
                            pointerEvents: 'none',
                        }}
            /> 

          
            </div>
            </Tooltip>
    </ThemeProvider>
  )
}

export default Piechart