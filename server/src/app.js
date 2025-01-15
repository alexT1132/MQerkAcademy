import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import AuthRoutes from "./routes/auth.routes.js";
import EeauRoutes from "./routes/eeau.routes.js";
import CounterRoutes from "./routes/counter.routes.js";

const app = express();

app.use(
    cors({
        origin: 'http://192.168.1.6:5003',
        credentials: true,
    })
)
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use("/api", AuthRoutes);
app.use("/api", EeauRoutes);
app.use("/api", CounterRoutes);

export default app;