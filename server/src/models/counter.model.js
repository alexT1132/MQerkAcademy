import mongoose from "mongoose";

const counterSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    año: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    fecha: { 
      type: Date, 
      default: Date.now,
    },
  },
);

export default mongoose.model("Counter", counterSchema);