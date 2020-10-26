import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router';

import Login from './components/pages/Login';
import Inicio from './components/pages/Inicio';
import Detalle from './components/pages/Detalle';
import Signup from './components/pages/Signup';
import SignupSocio from './components/pages/SignupSocio';
import RegistroOportunidad from './components/pages/RegistroOportunidad';
import RegistroSocio from './components/pages/RegistroSocio';
import Socios from './components/pages/Socios';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

const theme = createMuiTheme({
   palette: {
      primary: { main: '#EE5D36' },
      secondary: { main: '#FFFFFF'}
   }
})
function App() { 
   return (
      <div className="App">
         <MuiThemeProvider theme={theme}>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Signup />} />
            <ProtectedRoute path="/inicio" component={Inicio} redirectTo="/" />
            <ProtectedRoute path="/detalle" component={Detalle} redirectTo="/" />
            <ProtectedRoute path="/registro-oportunidad" component={RegistroOportunidad} redirectTo="/" />
            <ProtectedRoute path="/socios" component={Socios} redirectTo="/" />
            <ProtectedRoute path="/registro-socio" component={RegistroSocio} redirectTo="/" />
         </Routes>
         </MuiThemeProvider>
      </div>
   );
}

export default App;
