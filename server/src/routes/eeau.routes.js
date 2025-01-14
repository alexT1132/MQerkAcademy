import { Router } from "express";
import { create, upload, getData } from "../controllers/eeau.controller.js";

const router = Router();

router.post("/eeau", upload.single('foto'), create);

router.get("/eeau", getData);

export default router;