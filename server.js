import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "./firebase.js"; // makes sure Firebase is initialized

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Routes
import contactRoute from "./routes/contact.js";
import subscribeRoute from "./routes/subscribe.js";

app.use("/contact", contactRoute);
app.use("/subscribe", subscribeRoute);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
