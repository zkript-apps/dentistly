import express from "express";

const router = express.Router();

router.get("/", () => console.log('Test mock user'));

export default router;