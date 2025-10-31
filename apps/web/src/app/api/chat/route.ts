import { NextResponse } from 'next/server';
import { runChain } from '@chatbot/langchain';

export async function POST(req: Request) {
  const { message } = await req.json();
  const reply = await runChain(message);
  return NextResponse.json({ reply });
}
