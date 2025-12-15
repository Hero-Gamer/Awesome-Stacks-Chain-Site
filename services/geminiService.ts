import { GoogleGenAI, Chat } from "@google/genai";
import { RESOURCES } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `
You are Nexus AI, an expert assistant for the Stacks (Bitcoin Layer 2) ecosystem.
Your goal is to help users navigate the Stacks ecosystem, find tools, explain DeFi concepts on Bitcoin, and troubleshoot development issues.

You have access to the following curated list of resources (The Awesome Stacks List):
${JSON.stringify(RESOURCES.map(r => ({ name: r.name, desc: r.description, tags: r.tags, category: r.category })))}

Rules:
1. Be concise, professional, and helpful.
2. If a user asks for a recommendation (e.g., "best wallet"), use the provided resource list to suggest options.
3. If asked about technical details (Clarity, Proof of Transfer), explain them simply.
4. Keep the tone futuristic and encouraging, matching the "Stacks Nexus" brand.
5. Do not hallucinate resources not in the list if you are unsure, but you can use general knowledge about Stacks.
`;

export const initializeChat = (): void => {
  // The API key is injected by Vite's `define` plugin at build time.
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("Nexus AI Error: API Key is missing. Please check Vercel Environment Variables (VITE_API_KEY).");
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey });
    chatSession = genAI.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  // Double check if session was created successfully
  if (!chatSession) {
    return "System Offline: Configuration Error. Please ensure the API Key is set correctly in Vercel settings as VITE_API_KEY.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "No response received.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection Error: Unable to reach the Neural Network. Please try again later.";
  }
};