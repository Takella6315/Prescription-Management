import OpenAI from 'openai';
import 'dotenv/config';


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This is the parameters that can be modified in the future
const medicineName = "Methaphetamine";
const dosage = "0.1";

// Creates a prompt to make a call to OpenAI API to get response
async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Is ' + medicineName + ' with a dosage amount of ' + dosage + ' mg a safe amount?'}],
    model: 'gpt-3.5-turbo',
  });

  // Prints out the response from GPT AI in the terminal. This can be used to
  // generate specific responses to different patients.
  console.log(chatCompletion.choices[0].message);
}

main();