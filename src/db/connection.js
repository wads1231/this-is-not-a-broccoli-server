import 'dotenv/config';
import mongoose from 'mongoose';
import './models/transactionModel.js';

const MONGODB_URI = process.env.MONGODB_URI;

console.log('Connecting to MongoDB...');

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable not set');
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

export const db = mongoose.connection;