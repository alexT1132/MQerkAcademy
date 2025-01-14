import mongoose from "mongoose";
const eeauSchema = new mongoose.Schema({
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    comunidad: {
        type: String,
    },
    otraComunidad: {
        type: String,
    },
    correo: {
        type: String,
    },
    telefono: {
        type: String,
    },
    tutor: {
        type: String,
    },
    telefonoTutor: {
        type: String,
    },
    foto: {
        type: String,
    },
    na: {
        type: String,
    },
    otroNa: {
        type: String,
    },
    grado: {
        type: String,
    },
    discapacidad: {
        type: String,
    },
    otraDiscapacidad: {
        type: String,
    },
    orientacion: {
        type: String,
    },
    universidades: {
        type: String,
    },
    otraUni: {
        type: String,
    },
    licenciatura: {
        type: String,
    },
    grupo: {
        type: String,
    },
    modalidad: {
        type: String,
    },
    pago: {
        type: String,
    },
    tipoPago: {
        type: String,
    },
    duracion: {
        type: String,
    },
    opcional1: {
        type: String,
    },
    opcional2: {
        type: String,
    },
    folio: {
        type: String,
    },
    usuario: {
        type: String,
    },
});
export default mongoose.model("Eeau", eeauSchema);