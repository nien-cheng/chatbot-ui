import { OpenAIModel } from './openai';

export interface Message {
  role: Role;
  content: string;
}

export type Role = 'assistant' | 'user';

export interface ChatBody {
  model: OpenAIModel | null;
  messages: Message[];
  key: string;
  prompt: string;
  temperature: number;
  maxTokens: number;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[];
  model: OpenAIModel | null;
  prompt: string;
  temperature: number;
  maxTokens: number;
  folderId: string | null;
}
