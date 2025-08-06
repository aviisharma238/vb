// routes/contact.js
import express from "express";
import Contact from "../models/Contact.js"; // Make sure you have this model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Debug log to check incoming data
    console.log("Received:", req.body);

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err); // ✅ Detailed error
    res.status(500).json({ success: false, error: err.message });
  }
});


export default router;
