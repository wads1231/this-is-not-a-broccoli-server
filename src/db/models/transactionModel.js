import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    userData: { type: mongoose.Schema.Types.Mixed, required: true },
    amount: { type: Number, required: true },
    transactionId: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model('Transaction', TransactionSchema);
