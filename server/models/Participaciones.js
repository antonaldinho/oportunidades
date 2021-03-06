const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema(
   {
      rfpInvolucrado: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'RFP'
      },
      socioInvolucrado: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
   }
);

const participaciones = mongoose.model('Participaciones', schema)

module.exports = participaciones
