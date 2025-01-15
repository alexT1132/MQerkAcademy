import app from "./app.js";
import { connectDB } from "./db.js";

const Host = '192.168.1.5'

connectDB();
app.listen(4000, Host);
console.log("Conected on Port", 4000);