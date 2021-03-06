const User = require("../models/User");
const nodemailer = require("nodemailer");
let adminController = {};

/**
 * @param {Object} rawUser contains the user info to create
 */
adminController.createSocio = (rawUser) => {
   return new Promise((resolve, reject) => {
      rawUser.password = generatePassword();
      const user = new User(rawUser);
      user
         .save()
         .then(() => {
            let transporter = nodemailer.createTransport({
               host: process.env.HOST_NAME,
               port: 587,
               secure: false,
               auth: {
                  user: process.env.MAILER_USER,
                  pass: process.env.MAILER_PASSWORD,
               },
            });

            const mailOptions = {
               from: '"CSOFT MTY" <antonio.9714@outlook.com>', // sender address
               to: user.email, // list of receivers
               subject: "Tu usuario para Oportunidades Comerciales", // Subject line
               text: "Bienvenido", // plain text body
               html: `
               <b>Bienvenido al sistema de Oportunidades Comerciales del Clúster TIC de Nuevo León<b>
               <b>A continuación están tus credenciales para iniciar sesión en el sistema. Te recomendamos cambiar
               tu contraseña al iniciar sesión por primera vez.<b>
               <p>Username: ${user.email}</p>
               <p>Password: ${rawUser.password}</p>`,
            };
            transporter.sendMail(mailOptions, function (error, info) {
               if (error) {
                  console.log(error);
               } else {
                  console.log("se envio el correo");
               }
            });
            resolve(user);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

adminController.getSocios = () => {
   return new Promise((resolve, reject) => {
      User.find({userType: "socio"})
         .then((users) => {
            resolve(users);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

adminController.getSocio = (id) => {
   return new Promise((resolve, reject) => {
      User.findById(id)
         .then((user) => {
            resolve(user);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

adminController.deleteSocio = (id) => {
   return new Promise((resolve, reject) => {
      User.findByIdAndDelete(id)
         .then((user) => {
            resolve(user);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

adminController.updateSocio = (id, updates) => {
   return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(id, updates)
         .then((user) => {
            resolve(user);
         })
         .catch((error) => {
            reject(error);
         });
   });
};

function generatePassword() {
   var length = 8,
      charset =
         "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
   for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   }
   return retVal;
}

module.exports = adminController;
