import express from "express";
import { createUser, getAUser, getUser } from "./user.controller";
const router = express.Router()

router.get("/", getUser)
router.post("/create-user", createUser)

router.get("/:id", getAUser)




export default router;