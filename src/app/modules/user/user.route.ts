import express from "express";
import { createUser, getAUser, getAdminUsersController, getUser } from "./user.controller";
const router = express.Router()

router.get("/", getUser)
router.post("/create-user", createUser)

router.get("/admins", getAdminUsersController)

// dynamic route should be the last position
router.get("/:id", getAUser)




export default router;