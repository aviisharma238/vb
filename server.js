import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Required for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync(new URL("./firebase-key.json", import.meta.url))
);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Example POST route for contact form
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await db.collection("contacts").add({
      name,
      email,
      phone,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(200).json({ success: true, message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
