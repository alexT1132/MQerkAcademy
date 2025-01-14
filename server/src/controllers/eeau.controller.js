import Eeau from "../models/eeau.model.js";
import multer from "multer";
import fs from "node:fs";

export const upload = multer({ dest: 'public' });

export const create = async (req, res) => {

      const { 
        nombres,
        apellidos,
        comunidad,
        otraComunidad,
        correo,
        telefono,
        tutor,
        telefonoTutor,
        na,
        otroNa,
        grado,
        discapacidad,
        otraDiscapacidad,
        orientacion,
        universidades,
        otraUni,
        licenciatura,
        grupo,
        modalidad,
        pago,
        tipoPago,
        duracion,
        opcional1,
        opcional2,
        folio,
        usuario,
       } = req.body;
       console.log(req.file);

   function saveImage(file) {
    if(!fs.existsSync(usuario)) {
      fs.mkdirSync(`public/${usuario}`, { recursive: true });
      const newPath = `public/${usuario}/${file.originalname}`;
      const urlDirection = `${usuario}/${file.originalname}`;
      fs.renameSync(file.path, newPath);

      const newEeau = new Eeau({
        nombres,
        apellidos,
        comunidad,
        otraComunidad,
        correo,
        telefono,
        tutor,
        telefonoTutor,
        foto: urlDirection,
        na,
        otroNa,
        grado,
        discapacidad,
        otraDiscapacidad,
        orientacion,
        universidades,
        otraUni,
        licenciatura,
        grupo,
        modalidad,
        pago,
        tipoPago,
        duracion,
        opcional1,
        opcional2,
        folio,
        usuario,
      });

      const savedEeau = newEeau.save();

      res.json(savedEeau);

    } else {
      console.log('Esta carpeta ya existe');
    }
  }

    try {
      saveImage(req.file); 
    } catch (error) {
      console.log(error);
    }
};

// Peticion para mostrar todos
export const getData = async (req, res) => {
  const eeau = await Eeau.find();
  res.json(eeau);
};