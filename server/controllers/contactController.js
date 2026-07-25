import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

export async function createContact(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'Name, email, and message are all required.' });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: 'Database is not connected right now. Please try again later or email directly.',
      });
    }

    const contact = await Contact.create({ name: name.trim(), email: email.trim(), message: message.trim() });

    res.status(201).json({
      message: 'Message received — thank you for reaching out!',
      contactId: contact._id,
    });
  } catch (err) {
    next(err);
  }
}

export async function listContacts(req, res, next) {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database is not connected.' });
    }
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ contacts });
  } catch (err) {
    next(err);
  }
}
