// import { GoogleGenAI, Type } from "@google/genai";

// const apiKey = process.env.API_KEY || '';
// const ai = new GoogleGenAI({ apiKey });

export interface StrategicAssessment {
  hook: string;
  strategies: {
    title: string;
    description: string;
  }[];
}

export const analyzeInnovation = async (description: string): Promise<StrategicAssessment> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is building the following innovation: "${description}". 
      
      Act as a world-class IP Strategy Consultant for "Bharat IP Defence".
      Provide a strategic assessment of why protecting this specific innovation creates business value.
      
      CRITICAL RULES:
      1. DO NOT use legal jargon (filing, registration, application, forms, section 3, etc.).
      2. Use business terms (moat, monopoly, advantage, valuation, blocking, asset).
      3. Be sharp, premium, and concise.
      4. Output strictly JSON.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hook: { type: Type.STRING, description: "A punchy one-sentence assessment of the potential market power of this idea." },
            strategies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as StrategicAssessment;
  } catch (error) {
    console.error("Analysis failed", error);
    return {
      hook: "Your innovation deserves a fortress, not just a fence.",
      strategies: [
        { title: "Market Exclusivity", description: "Prevent competitors from eroding your margins." },
        { title: "Asset Valuation", description: "Transform intangible code/designs into balance sheet assets." },
        { title: "Freedom to Operate", description: "Ensure you aren't blocked by others in your space." }
      ]
    };
  }
};