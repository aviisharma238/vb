// routes/contact.js
import express from "express";
import admin from "firebase-admin";

const router = express.Router();

// Get Firestore instance from the already-initialized Firebase Admin app
const db = admin.firestore();

/**
 * POST /contact
 * body: { name, email, phone, message }
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, phone, message) are required.",
      });
    }

    // Save to Firestore
    const ref = await db.collection("contacts").add({
      name,
      email,
      phone,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(201).json({
      success: true,
      id: ref.id,
      message: "Contact saved successfully",
    });
  } catch (err) {
    console.error("Error saving contact:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
