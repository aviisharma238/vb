import express from "express";
import { db, admin } from "../firebase.js"; // ✅ Use same instance

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await db.collection("contacts").add({
      name,
      email,
      phone,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ success: true, message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
