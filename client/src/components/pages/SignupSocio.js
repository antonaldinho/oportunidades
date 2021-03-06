import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, TextField, Button} from '@material-ui/core';

import '../../styles/globalStyles.css';

const SignupSocio = () => {
    return ( 
      <>
        <Grid
          container
          direction="column"
          justify="top"
          alignItems="center"
          className="container"
        >
          <h1 className="texto-primary">Regístrate</h1>
          <TextField className="textField mb-1" required label="Nombre"></TextField>
          <TextField className="textField mb-1" required label="Correo" type="email"></TextField>
          <TextField className="textField mb-1" required label="Número de socio"></TextField>
          <TextField className="textField mb-1" required type="password" label="Contraseña"></TextField>
          <TextField className="textField" required type="password" label="Confirmar contraseña"></TextField>
          <Button variant="contained" className="boton">Regístrate</Button>
          <div className="group">
            <span className="texto">¿Ya tienes una cuenta?</span>
            <Link to="/" className="link ml-1">
                ¡Inicia sesión!
            </Link>
          </div>
        </Grid>
      </>
    );
}
 
export default SignupSocio;