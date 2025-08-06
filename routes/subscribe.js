import express from "express";
import { db, admin } from "../firebase.js"; // use same Firebase instance

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: "Email is required" });
    }

    await db.collection("subscriptions").add({
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ success: true, message: "Subscription saved successfully" });
  } catch (error) {
    console.error("Error saving subscription:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
