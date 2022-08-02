import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { ThemeProvider, Typography} from '@mui/material'
import { darkTheme } from './Header';
import '.././App.css';

const Piechart = ({dataEntry , totalNutri}) => {

    console.log('Piechartjs : ',dataEntry,totalNutri);

  return (
    <ThemeProvider theme ={darkTheme}>
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

           
             {/* sx={{  py: 10,px:1,fontSize : 8,color: '#BDBCBE',fontFamily:'Montserrat'}} */}
            </div>
          
    </ThemeProvider>
  )
}

export default Piechart