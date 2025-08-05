import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone: {
    type: String,  // or Number if you prefer
    required: false, // make true if you want it required
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
