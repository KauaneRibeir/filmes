import e from "express";
import produtoraController from "../controllers/produtora.js";

const router = e.Router()

router.post("/", produtoraController.store)
router.get("/", produtoraController.index)
router.get("/:id", produtoraController.show)
router.put("/:id", produtoraController.update)

export default router