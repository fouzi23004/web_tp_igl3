import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  imports: [BookForm, BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {
  books: Book[] = [
    new Book(1, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 'contact@gallimard.fr', '71123456', '1943-04-06', 'Roman', true, 10),
    new Book(2, 'Introduction à Angular', 'John Doe', 'john@techbooks.com', '72234567', '2023-01-15', 'Informatique', true, 5),
    new Book(3, 'Histoire de la Tunisie', 'Ahmed Ben Ali', 'ahmed@histobooks.tn', '73345678', '2020-06-20', 'Histoire', false, 0),
    new Book(4, 'Les Misérables', 'Victor Hugo', 'info@classiques.fr', '74456789', '1862-01-01', 'Roman', true, 8)
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  bookToEdit: Book | null = null;

  addBook(book: Book): void {
    const newId = this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
    book.id = newId;
    this.books.push(book);
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
    this.bookToEdit = null;
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }

  editBook(book: Book): void {
    this.bookToEdit = { ...book };
  }

  cancelEdit(): void {
    this.bookToEdit = null;
  }
}
