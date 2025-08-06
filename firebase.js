// firebase.js
import admin from "firebase-admin";
import fs from "fs";

// Load service account
const serviceAccount = JSON.parse(
  fs.readFileSync(new URL("./firebase-key.json", import.meta.url))
);

// Initialize Firebase app only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
export { admin, db };
