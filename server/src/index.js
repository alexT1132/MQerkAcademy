import app from "./app.js";
import { connectDB } from "./db.js";

const Host = '192.168.0.19'

connectDB();
app.listen(4000, Host);
console.log("Conected on Port", 4000);