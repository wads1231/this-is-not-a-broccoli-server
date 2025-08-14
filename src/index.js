import express from 'express';
import cors from 'cors'; // Add this line
import './db/connection.js';
import { createTransaction } from './db/services/createTransaction.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Add this line
//Allow cross-origin requests from this address only https://fundacion-esperanza.netlify.app/

app.use(express.json());

app.get('/api/', (_req, res) => {
  res.send('API is running');
});

app.post('/api/createTransaction', async (req, res) => {
  const body = req.body;
  try {
    const transaction = await createTransaction({
      userData: body.userData,
      amount: body.amount,
      transactionId: body.transactionId,
      date: body.date,
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).send('Failed to create transaction');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});