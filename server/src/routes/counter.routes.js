import { Router } from "express";
import { create, getDataEeau, getDataEeap, getDataEe, getDataPov, getData } from "../controllers/counter.controller.js";

const router = Router();

router.post("/counter", create);

router.get("/counter", getData);

router.get("/counter_eeau", getDataEeau);

router.get("/counter_eeap", getDataEeap);

router.get("/counter_ee", getDataEe);

router.get("/counter_pov", getDataPov);

export default router;