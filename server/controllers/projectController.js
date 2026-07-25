import mongoose from 'mongoose';
import Project from '../models/Project.js';

export async function listProjects(req, res, next) {
  try {
    if (mongoose.connection.readyState !== 1) {
      // No DB connected — let the client fall back to its static data.
      return res.status(200).json({ projects: [] });
    }
    const projects = await Project.find().sort({ order: 1, createdAt: 1 });
    res.json({ projects });
  } catch (err) {
    next(err);
  }
}
