import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const app = express();
const port = process.env.PORT || 3005;
const apiKey = ""
const openai = new OpenAI({ apiKey: apiKey });

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Here, we define the '/chatbot' route to handle questions from our
// frontend React application
app.post("/chatbot", async (req, res) => {
  // The 'question' variable is the user's input from the frontend
  const { question } = req.body;
  // Here is where we communicate with the OpenAI API to create our chatbot.
  // We store the chatbot's response in the 'response' variable
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a professor who love using convoluted language when talking with other. Everytime student ask for clarification, you always ask them to stop making nonsense. If you don't know the answer of the student's question, always make up a response.",
      },
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 300,
  });
  res.send(response.choices[0].message.content);
});
