import Counter from "../models/counter.model.js";

export const create = async (req, res) => {

    const {client, curso, año, codigo} = req.body;

    try {
        
        const newCounter = new Counter({
            client,
            curso,
            año,
            codigo
        });
    
        const savedCounter = await newCounter.save()
    
        res.json(savedCounter);

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }

}

// Peticion para mostrar todos los datos del curso EEAU
export const getDataEeau = async (req, res) => {
    try {
      const counter = await Counter.findOne({ curso: 'eeau' }).sort({ fecha: -1 }).exec();
      res.json(counter);
    } catch (error) {
      console.log(error)
    }
  };

  // Peticion para mostrar todos los datos del curso EEAP
export const getDataEeap = async (req, res) => {
  try {
    const counter = await Counter.findOne({ curso: 'eeap' }).sort({ fecha: -1 }).exec();
    res.json(counter);
  } catch (error) {
    console.log(error)
  }
  };

   // Peticion para mostrar todos los datos del curso EE
export const getDataEe = async (req, res) => {
    try {
      const counter = await Counter.findOne({ curso: 'ee' }).sort({ fecha: -1 }).exec();
      res.json(counter);
    } catch (error) {
      console.log(error)
    }
  };

     // Peticion para mostrar todos los datos del curso Pov
export const getDataPov = async (req, res) => {
  try {
    const counter = await Counter.findOne({ curso: 'pov' }).sort({ fecha: -1 }).exec();
    res.json(counter);
  } catch (error) {
    console.log(error)
  }
  };

    // Peticion para mostrar todos los datos
export const getData = async (req, res) => {
    const counter = await Counter.findOne();
    res.json(counter);
  };