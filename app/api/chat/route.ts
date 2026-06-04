import { NextRequest, NextResponse } from 'next/server';
import { chatbotConfig } from '@/data/chatbotConfig';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.warn('OPENAI_API_KEY is not defined. Using local mock chatbot responder for testing.');
      
      // Determine reply based on last message to make local testing interactive
      const lastMessage = messages[messages.length - 1]?.content || '';
      const lastUserMsgLower = lastMessage.toLowerCase();
      
      let replyMessage = "Hello! I am running in local mock mode because no `OPENAI_API_KEY` was found in your environment variables. You can test my features by asking to connect or typing your contact details.";
      let recommendationGiven = false;
      let handoffReady = false;
      
      // Initialize/extract lead details
      let name = "";
      let email = "";
      let phone = "";
      let company = "";
      let userRequirement = "";

      // Look through all messages to persist or extract details
      messages.forEach((m: any) => {
        if (m.role === 'user') {
          const txt = m.content;
          const emailMatch = txt.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
          if (emailMatch) email = emailMatch[0];
          
          const phoneMatch = txt.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/) || txt.match(/\d{10}/);
          if (phoneMatch) phone = phoneMatch[0];
        }
      });

      // Simple mock state machine
      if (lastUserMsgLower.includes('connect') || lastUserMsgLower.includes('talk') || lastUserMsgLower.includes('speak') || lastUserMsgLower.includes('pricing') || lastUserMsgLower.includes('cost') || lastUserMsgLower.includes('contact')) {
        replyMessage = "I would be happy to connect you with the Impulse Digital team. Could you share your name, company, email, and phone number here, so we can connect you properly?";
        recommendationGiven = true;
      } else if (email || phone) {
        name = "Local Tester";
        company = "Local Test Corp";
        userRequirement = "Local development test of chatbot integration.";
        replyMessage = "Thank you! I have captured your contact details. The Google reCAPTCHA verification should now appear to complete the test.";
        recommendationGiven = true;
        handoffReady = true;
      } else if (lastUserMsgLower.trim() !== '') {
        replyMessage = `[Mock Mode] You said: "${lastMessage}". To test the Zoho CRM and WhatsApp handoff flows, type "connect" or share your email/phone number.`;
      }

      return NextResponse.json({
        message: replyMessage,
        metadata: {
          recommendationGiven,
          handoffReady,
          leadInfo: {
            name: name || (email || phone ? "Local Tester" : ""),
            email: email,
            phone: phone,
            company: company || (email || phone ? "Local Test Corp" : ""),
            preferredTime: "Anytime",
            userRequirement: userRequirement || "Testing chatbot locally.",
            mainChallenge: "Local Mocking",
            recommendedDirection: "AI Marketing Systems"
          }
        }
      });
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
