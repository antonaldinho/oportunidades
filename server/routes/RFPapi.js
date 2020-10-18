const express = require("express");
const userMiddleware = require("../middleware/User");
const rfpController = require("../controllers/rfpController");

const router = express.Router();

/**
 * Route to create a RFP by a client
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */

router.post("/create-rfp", userMiddleware, (req, res) => {
   let id = req.user._id;
   rfpController
      .createrfp(req.body, id)
      .then((rfp) => {
         return res.send({
           success: 1,
           rfp: rfp,
         });
      })
      .catch((error) => {
         console.log("error", error)
         return res.status(400).send({ error });
      });
});


/**
 * Route to get all of the existing RFPs
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */

router.get("/get-rfp", userMiddleware, (req, res) => {
   rfpController
      .getrfp(req.body)
      .then(
         (rfps) => {return res.send(rfps)}
      )
      .catch((error) => {
         console.log("error", error)
         return res.status(400).send({ error });
      });
});

/**
 * Route to get the existing RFPs con estado 'Activo'
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */

router.get("/get-rfp-socio", userMiddleware, (req, res) => {
   rfpController
      .getrfpSocio(req.body)
      .then(
         (rfps) => {return res.send(rfps)}
      )
      .catch((error) => {
         console.log("error", error)
         return res.status(400).send({ error });
      });
});

/**
 * Route to get the existing RFPs que hayan sido creadas por cierto id
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */

router.get("/get-rfp-cliente", userMiddleware, (req, res) => {
   rfpController
      .getrfpCliente(req.user.id)
      .then(
         (rfps) => {return res.send(rfps)}
      )
      .catch((error) => {
         console.log("error", error)
         return res.status(400).send({ error });
      });
});

/**
 * Route to delete a RFP by a client
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */
router.delete('/deleterfp', userMiddleware, (req, res) => {
  rfpController
     .deleterfp(req)
     .then(() => {
        return res.send();
     })
     .catch((error) => {
        return res.status(400).send({ error });
     });
});

/**
 * Route to update a RFP by a client
 * @implements {userMiddleWare} Function to check if the request is sent by a logged user
 * @param {Object} req contains the RFP's data in its body.
 * @param {Object} res response for the request
 */
router.put('/updaterfp', userMiddleware, (req, res) => {
  rfpController
     .updaterfp(req)
     .then(() => {
        return res.send();
     })
     .catch((error) => {
        return res.status(400).send({ error });
     });
});


router.get("/ping", userMiddleware, (req, res) => {
   return res.send({info: "ping is working for authorized user"})
});

module.exports = router;
