import React from 'react'
import { Container, Stack, Paper, ThemeProvider } from '@mui/material'
import UserInfo from './UserInfo';
import Steps from './Steps';
import Work from './Work';
import Nutri from './Nutri';
import Notification from './Notification';
import { darkTheme } from './Header';


const UserRow = ({ User }) => {

  const p = Number(User.proteinConsumed);
  const c = Number(User.carbConsumed);
  const f = Number(User.fatConsumed);

  const pt = Number(User.proteinTarget);
  const ct = Number(User.carbTarget);
  const ft = Number(User.fatTarget);

  const dataEntry = [

    { title: 'Protien', value: p, color: '#F45C84' },
    { title: 'Carbs', value: c, color: '#F5C90F' },
    { title: 'Fats', value: f, color: '#03C7FC' },

  ];

  const nutrientData = [

    { title: 'Protien', value: p, maxValue: pt },
    { title: 'Fats', value: f, maxValue: ft },
    { title: 'Carbs', value: c, maxValue: ct },

  ];

  const totalNutri = (p + c + f);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ my: 4 }}>
        <Paper sx={{ py: 1, px: 3, borderRadius: 3 }}>
          <Stack direction="row" spacing={10}>
            <UserInfo name={User.name} email={User.email} />
            <Steps Steps={User.stepsWalked} target={User.stepsTarget} />
            <Work performedDate={User.performedDate} scheduledDate={User.scheduledDate} userId={User.userId} feedback={User.feedback} />
            <Nutri userId={User.userId} target={User.calorieTarget} calorieIntake={User.calorieIntake} dataEntry={dataEntry} totalNutri={totalNutri} nutrientData={nutrientData} />
            <Notification />
          </Stack>
        </Paper>
      </Container>
    </ThemeProvider >
  )
}

export default UserRow