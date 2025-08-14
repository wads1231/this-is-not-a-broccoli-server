import { Transaction } from '../models/transactionModel.js';

/**
 * Creates a new transaction in the database.
 * @param {Object} transactionData - The data for the new transaction.
 * @returns {Promise<Object>} The created transaction object.
 */
export async function createTransaction(transactionData) {
  const transaction = new Transaction({
    userData: transactionData.userData,
    amount: transactionData.amount,
    transactionId: transactionData.transactionId,
    date: transactionData.date || new Date(),
  });

  try {
    const savedTransaction = await transaction.save();
    return savedTransaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw new Error('Failed to create transaction');
  }
}