import { Book } from '../models/Book';

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export class ApiService {
  static async fetchBooks(): Promise<ApiResponse<Book[]>> {
    // Simulation d'un appel API
    return new Promise((resolve) => {
      setTimeout(() => {
        const books: Book[] = [
          { id: 1, title: "1984", author: "George Orwell", year: 1949, available: true },
          { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, available: true },
          { id: 3, title: "Harry Potter", author: "J.K. Rowling", year: 1997, available: true }
        ];
        resolve({ data: books });
      }, 1000);
    });
  }
}