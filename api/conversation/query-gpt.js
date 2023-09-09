import { getSession } from 'next-auth/client';

export default async (req, res) => {
  // Parse the request body
  const { query, model } = req.body;

  // Authenticate the user
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // Generate a response using your GPT model
  // This is a placeholder and should be replaced with your actual logic
  const text = 'Hello, world!';
  const balance = 50;

  // Send the response
  res.status(200).json({ balance, text });
};

  
    // Path: 0xGPT_TG_Bot/api/conversation/query-gpt.js