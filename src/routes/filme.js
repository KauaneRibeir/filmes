import e from "express";
import filmeController from "../controllers/filme.js";

const router = e.Router()

router.post("/", filmeController.store)
router.get("/", filmeController.index)
router.get("/:id", filmeController.show)
router.put("/:id", filmeController.update)

export default router