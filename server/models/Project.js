import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    stack: [{ type: String }],
    highlights: [{ type: String }],
    github: { type: String },
    demo: { type: String },
    status: { type: String, enum: ['live', 'internship', 'archived'], default: 'live' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
