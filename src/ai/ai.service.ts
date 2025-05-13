// ai/ai.service.ts
import { GoogleGenAI } from '@google/genai';
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InMemoryQueueService } from '../queue/in-memory-queue.service';
import { randomInt } from 'crypto';

@Injectable()
export class AiService implements OnModuleInit {
  private ai: GoogleGenAI;
  private readonly logger = new Logger(AiService.name);

  constructor(private queueService: InMemoryQueueService) {
    this.queueService.setMaxConcurrent(1);
  }

  onModuleInit() {
    const apiKey = process.env.GEMINI_API_KEY;

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
    // Adiciona a chamada à API na fila e aguarda sua vez
    return this.queueService.addToQueue(async () => {
      this.logger.log('Executando requisição à API Gemini');

      try {
        const models = await this.ai.models.list();

        const response = await this.ai.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: `
            Instruções:
            - Responda apenas o que foi perguntado, sem introduções ou despedidas
            - Use sempre português do Brasil
            - Seja direto e objetivo
            - Não use emojis ou formatações especiais
            - Evite explicações desnecessárias
            - Respostas sao ficticias/ludicas e relacionadas a um jogo de RPG
            
            Prompt: ${prompt}
          `,
          config: { temperature: 2.0, seed: randomInt(9999) }
        });

        return response.text || "";
      } catch (error) {
        this.logger.error(`Failed to generate content: ${error.message}`);
        throw new Error(`Failed to generate content: ${error.message}`);
      }
    });
  }
}