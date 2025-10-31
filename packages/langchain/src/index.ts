import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("OPENAI_API_KEY is not set. Add it to your environment (.env)");
}

const client = new OpenAI({ apiKey });

export async function chat(prompt: string): Promise<string> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: prompt }
    ],
    temperature: 0.7
  });
  return response.choices[0]?.message?.content ?? "";
}

export async function runChain(input: string): Promise<string> {
  return chat(input);
}
