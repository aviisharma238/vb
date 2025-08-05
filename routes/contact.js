// routes/contact.js
import express from "express";
import Contact from "../models/Contact.js"; // Make sure you have this model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
