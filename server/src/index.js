import app from "./app.js";
import { connectDB } from "./db.js";

<<<<<<< Updated upstream
const Host = '192.168.1.22'
=======
const Host = '192.168.0.19'
>>>>>>> Stashed changes

connectDB();
app.listen(4000, Host);
console.log("Conected on Port", 4000);