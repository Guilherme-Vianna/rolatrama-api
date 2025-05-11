import { GoogleGenAI } from '@google/genai';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService implements OnModuleInit {
  private ai: GoogleGenAI;

  constructor() { }

  onModuleInit() {
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      throw new Error("Gemini Key not set");
    }

    this.ai = new GoogleGenAI({ apiKey });
  }

  /**
   * Generate content using Gemini model
   * @param prompt The text prompt to send to Gemini
   * @returns Promise with the generated response
   */
  async generateContent(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `
          Instruções:
          - Responda apenas o que foi perguntado, sem introduções ou despedidas
          - Use sempre português do Brasil
          - Seja direto e objetivo
          - Não use emojis ou formatações especiais
          - Evite explicações desnecessárias
          
          Prompt: ${prompt}
        `,
      });

      return response.text || "";
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }
}