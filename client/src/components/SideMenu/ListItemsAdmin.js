import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ProfileIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PeopleIcon from "@material-ui/icons/People";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";

const ListItemsAdmin = () => {
   const navigate = useNavigate();
   return (
      <div>
         <ListItem
            button
            onClick={() => {
               navigate("/inicio");
            }}
         >
            <ListItemIcon>
               <div className="drawer-icon">
                  <DashboardIcon />
               </div>
            </ListItemIcon>
            <div className="texto-primary">
               <ListItemText primary="Inicio" />
            </div>
         </ListItem>

         <ListItem
            button
            onClick={() => {
               navigate("/mi-perfil");
            }}
         >
            <ListItemIcon>
               <div className="drawer-icon">
                  <ProfileIcon />
               </div>
            </ListItemIcon>
            <div className="texto-primary">
               <ListItemText primary="Mi perfil" />
            </div>
         </ListItem>

         <ListItem
            button
            onClick={() => {
               navigate("/socios");
            }}
         >
            <ListItemIcon>
               <div className="drawer-icon">
                  <PeopleIcon />
               </div>
            </ListItemIcon>
            <div className="texto-primary">
               <ListItemText primary="Socios" />
            </div>
         </ListItem>

         <ListItem button>
            <ListItemIcon>
               <div className="drawer-icon">
                  <ExitToAppIcon />
               </div>
            </ListItemIcon>
            <div className="texto-primary">
               <ListItemText primary="Cerrar sesión" />
            </div>
         </ListItem>
      </div>
   );
};
export default ListItemsAdmin;