import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn('⚠️  No MONGO_URI set — server running without a database connection.');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    // Don't crash the whole server just because Mongo is down — the client
    // gracefully falls back to static data, so keep the API up for /health etc.
  }
}
