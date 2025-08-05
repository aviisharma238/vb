import express from "express";
import Contact from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
