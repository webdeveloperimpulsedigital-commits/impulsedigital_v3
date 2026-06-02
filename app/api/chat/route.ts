import { NextRequest, NextResponse } from 'next/server';
import { chatbotConfig } from '@/data/chatbotConfig';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OPENAI_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        {
          message: "I apologize, but I am unable to connect to the AI service right now. Please feel free to reach out to us directly via phone or email!",
          metadata: {
            recommendationGiven: false,
            handoffReady: false,
            leadInfo: {
              name: "",
              email: "",
              phone: "",
              company: "",
              preferredTime: "",
              userRequirement: "",
              mainChallenge: "",
              recommendedDirection: ""
            }
          }
        },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: 'system',
      content: chatbotConfig.systemPrompt,
    };

    const formattedMessages = [systemMessage, ...messages];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: formattedMessages,
        response_format: { type: 'json_object' },
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error response:', errorText);
      throw new Error(`OpenAI API responded with status ${response.status}`);
    }

    const data = await response.json();
    const assistantMessageContent = data.choices?.[0]?.message?.content;

    if (!assistantMessageContent) {
      throw new Error('No content returned from OpenAI API completion.');
    }

    // Parse the JSON returned by the assistant to verify it's valid JSON
    // and send it back to the client directly.
    const parsedContent = JSON.parse(assistantMessageContent);
    return NextResponse.json(parsedContent);

  } catch (error: any) {
    console.error('Error in chatbot API route:', error);
    return NextResponse.json(
      {
        message: "Oops! Something went wrong while processing your request. Please try again or contact us directly.",
        metadata: {
          recommendationGiven: false,
          handoffReady: false,
          leadInfo: {
            name: "",
            email: "",
            phone: "",
            company: "",
            preferredTime: "",
            userRequirement: "",
            mainChallenge: "",
            recommendedDirection: ""
          }
        }
      },
      { status: 500 }
    );
  }
}
export const dynamic = 'force-dynamic';
