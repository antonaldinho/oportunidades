import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Card, CardActions, CardContent, Typography, Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const config = {
  headers: {
     Authorization: "Bearer " + sessionStorage.getItem("token"),
     "Content-Type": "application/json",
  },
};

const useStyles = makeStyles({
  root: {
    minWidth: '90%',
    maxWidth: '90%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
    color: '#EE5D36',
    flex: 1,
  },
  icono: {
    fontSize: 60,
    fontWeight: 800,
    color: '#EE5D36',
    marginTop: 10,
    marginLeft: 10,
  },
  contacto: {
    fontSize: 23,
    fontWeight: 800,
    color: '#EE5D36',
    textAlign: 'left',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
  },
  estatus: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: 'left',
    marginRight: '0.5em',
    color: '#EE5D36',
  },
  texto: {
    fontSize: 16,
    textAlign: 'left',
  },
  containerText: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  contenedorBotones: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignContent: 'flex-end',
    justifyContent: 'center',
    marginLeft: '1.5em',
  },
});

export default function SimpleCard({rfp}) {
  const classes = useStyles();

  // state de error
  const [mensajeError, guardarMensajeError] = useState('');

  // hook para redireccionar
  const navigate = useNavigate();

  // Obtener tipo de usuario
  const userType = sessionStorage.getItem("userType");

  // validación y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      name_person: rfp.nombrecliente,
      position: rfp.posicioncliente,
      phone: rfp.telefono,
      email: rfp.email,
      rfpname: rfp.nombreOportunidad,
      objective: rfp.objetivoOportunidad,
      imp_dates: rfp.fechasRelevantes,
      problem: rfp.descripcionProblematica,
      functional: rfp.descripcionFuncional,
      requirements: rfp.requerimientosObligatorios,
      aprobadaUsuario: rfp.aprobadaAreaUsuario,
      aprobadaTI: rfp.aprobadaAreaTI,
      presupuesto: rfp.presupuestoAsignado,
      tipo_general: rfp.tipoGeneralProyecto,
      tipo_esp: rfp.tipoEspecificoProyecto,
      comment: rfp.comentariosAdicionales,
      estatus: rfp.estatus,
    },
    validationSchema: Yup.object({
      name_person: Yup.string()
                  .required('El nombre es obligatorio'),
      position: Yup.string()
                  .required('La posición es obligatoria'),
      phone: Yup.string()
                  .required('El teléfono es obligatorio'),
      email: Yup.string()
                  .required('El correo es obligatorio'),
      rfpname: Yup.string()
                  .required('El nombre es obligatorio'),
      objective: Yup.string()
                  .required('El objetivo es obligatorio'),
      imp_dates: Yup.string()
                  .required('Las fechas son obligatorias'),
      problem: Yup.string()
                  .required('La problemática es obligatoria'),
      functional: Yup.string()
                  .required('La descripción es obligatoria'),
      requirements: Yup.string()
                  .required('Los requerimientos son obligatorios'),
      aprobadaUsuario: Yup.string()
                  .required('La pregunta es obligatoria'),
      aprobadaTI: Yup.string()
                  .required('La pregunta es obligatoria'),
      presupuesto: Yup.string()
                  .required('La pregunta es obligatoria'),
      tipo_general: Yup.string()
                  .required('El tipo es obligatorio'),
      tipo_esp: Yup.string()
                  .required('El tipo es obligatorio'),
      estatus: Yup.string()
                  .required('El estatus es obligatorio'),
      comment: Yup.string(),
    }),
    onSubmit: rfp => {
      console.log('editar');
      console.log(rfp);
      navigate(-1);
      //  axios
      //     .post("/RFP/create-rfp",
      //        {
      //           nombrecliente: rfp.name_person,
      //           posicioncliente: rfp.position,
      //           telefono: rfp.phone,
      //           email: rfp.email,
      //           nombreOportunidad: rfp.rfpname,
      //           objetivoOportunidad: rfp.objective,
      //           fechasRelevantes: rfp.imp_dates,
      //           descripcionProblematica: rfp.problem,
      //           descripcionFuncional: rfp.functional,
      //           requerimientosObligatorios: rfp.requirements,
      //           aprobadaAreaUsuario: rfp.aprobadaUsuario,
      //           aprobadaAreaTI: rfp.aprobadaTI,
      //           presupuestoAsignado: rfp.presupuesto,
      //           comentariosAdicionales: rfp.comment,
      //           tipoGeneralProyecto: rfp.tipo_general,
      //           tipoEspecificoProyecto: rfp.tipo_esp,
      //        }, config
      //     )
      //     .then((res) => {
      //        // redireccionar
      //        navigate(-1);
      //     })
      //     .catch((error) => {
      //        console.log(error);
      //        guardarMensajeError('RFP inválido');
      //     })
    }
 });

  return (
    <div className="rfp-card-detalle">
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          Editar oportunidad
        </Typography>
        <Grid item xs={12} container direction="column" alignItems="center">
          <form onSubmit={formik.handleSubmit} className="container-rfp-edit">
            {mensajeError === ''
              ? null
              : (<p className="error-titulo-rojo">{mensajeError}</p>)}
            <TextField
              className="textField-completo-100 mb-1"
              id="name_person"
              label="Nombre de la persona"
              value={formik.values.name_person}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name_person && formik.errors.name_person
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.name_person}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="position"
              label="Posición"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.position && formik.errors.position
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.position}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="phone"
              label="Teléfono"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.phone}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              type="email"
              id="email"
              label="Correo electrónico"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.email}</p>)
              : null }
                <TextField
              className="textField-completo-100 mb-1"
              id="rfpname"
              label="Nombre de la oportunidad"
              value={formik.values.rfpname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.rfpname && formik.errors.rfpname
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.rfpname}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="objective"
              label="Objetivo de oportunidad"
              value={formik.values.objective}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.objective && formik.errors.objective
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.objective}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="imp_dates"
              label="Fechas relevantes"
              value={formik.values.imp_dates}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.imp_dates && formik.errors.imp_dates
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.imp_dates}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="problem"
              label="Descripción de la problemática"
              value={formik.values.problem}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.problem && formik.errors.problem
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.problem}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="functional"
              label="Descripción funcional de la oportunidad"
              value={formik.values.functional}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.functional && formik.errors.functional
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.functional}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="requirements"
              label="Requerimientos obligatorios"
              value={formik.values.requirements}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.requirements && formik.errors.requirements
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.requirements}</p>)
              : null }
            <label className="textLeft textField-completo-100 mb-1"> La necesidad: </label>
            <TextField
              className="textField-completo-100 mb-1"
              id="aprobadaUsuario"
              label="¿Ha sido aprobada por el área usuaria? (Sí/No)"
              value={formik.values.aprobadaUsuario}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.aprobadaUsuario && formik.errors.aprobadaUsuario
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.aprobadaUsuario}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="aprobadaTI"
              label="¿Ha sido aprobada por el área de TI? (Sí/No)"
              value={formik.values.aprobadaTI}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.aprobadaTI && formik.errors.aprobadaTI
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.aprobadaTI}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="presupuesto"
              label="¿Tiene un presupuesto asignado? (Sí/No)"
              value={formik.values.presupuesto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.presupuesto && formik.errors.presupuesto
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.presupuesto}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="tipo_general"
              label="Tipo general del proyecto"
              value={formik.values.tipo_general}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.tipo_general && formik.errors.tipo_general
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.tipo_general}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="tipo_esp"
              label="Tipo específico del proyecto"
              value={formik.values.tipo_esp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.tipo_esp && formik.errors.tipo_esp
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.tipo_esp}</p>)
              : null }
            <TextField
              className="textField-completo-100 mb-1"
              id="comment"
              label="Comentarios adicionales"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.comment && formik.errors.comment
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.comment}</p>)
              : null }
              <TextField
              className="textField-completo-100 mb-1"
              id="estatus"
              label="Estatus"
              value={formik.values.estatus}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.estatus && formik.errors.estatus
              ? (<p className="error-titulo-rfp textField-completo-100"><span className="error-texto">*</span>{formik.errors.estatus}</p>)
              : null }
          <div className={classes.contenedorBotones}>
            <Button size="small" onClick={() => { navigate(-1)}}>CANCELAR</Button>
            <Button type="submit" variant="contained" className="boton">GUARDAR</Button>
          </div>
        </form>
      </Grid>
      </CardContent>
    </Card>
    </div>
  );
}