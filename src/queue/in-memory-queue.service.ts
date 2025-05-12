import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class InMemoryQueueService {
  private readonly logger = new Logger(InMemoryQueueService.name);
  private queue: Array<{ id: string; task: () => Promise<any>; resolve: Function; reject: Function }> = [];
  private processing = false;
  private maxConcurrent = 1;
  private currentProcessing = 0;

  constructor() { }

  setMaxConcurrent(max: number) {
    this.maxConcurrent = max;
  }

  async addToQueue<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 9);
      this.queue.push({ id, task, resolve, reject });
      this.logger.debug(`Task ${id} added to queue. Queue length: ${this.queue.length}`);

      if (!this.processing) {
        this.processQueue();
      }
    });
  }

  private async processQueue() {
    if (this.queue.length === 0 || this.currentProcessing >= this.maxConcurrent) {
      if (this.queue.length === 0 && this.currentProcessing === 0) {
        this.processing = false;
      }
      return;
    }

    this.processing = true;

    const item = this.queue.shift();
    if (!item) return;

    this.currentProcessing++;
    this.logger.debug(`Processing task ${item.id}. Current processing: ${this.currentProcessing}`);

    try {
      const result = await item.task();
      item.resolve(result);
    } catch (error) {
      this.logger.error(`Error processing task ${item.id}:`, error);
      item.reject(error);
    } finally {
      this.currentProcessing--;
      this.logger.debug(`Task ${item.id} completed. Current processing: ${this.currentProcessing}`);

      // Continue processando a fila
      this.processQueue();
    }
  }
}