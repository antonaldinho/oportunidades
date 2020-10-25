import React from "react";
import {useLocation} from 'react-router-dom';
import { Grid } from "@material-ui/core";

import "../../styles/globalStyles.css";
import SideMenu from "../SideMenu/SideMenu";
import RfpCardDetalle from "../Cards/RfpCardDetalle";

const Inicio = ({route}) => {

   const {state} = useLocation();
   const {rfp} = state;

      return (
      <>
         <SideMenu />
         <Grid container className="container-dashboard-margin" ></Grid>
         <Grid
            container
            direction="row"
            className="container-detalle "
         >
            <RfpCardDetalle key={rfp._id} rfp={rfp} />
         </Grid>
      </>
   );
};

export default Inicio;