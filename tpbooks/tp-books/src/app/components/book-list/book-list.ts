import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  imports: [FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() books: Book[] = [];

  @Output() deleteBook = new EventEmitter<number>();
  @Output() editBook = new EventEmitter<Book>();

  searchTerm: string = '';
  sortBy: string = '';

  get filteredBooks(): Book[] {
    let result = this.books;

    // Filter by search term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.toLowerCase().includes(term)
      );
    }

    // Sort
    if (this.sortBy === 'category') {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'availability') {
      result = [...result].sort((a, b) => (b.isAvailable ? 1 : 0) - (a.isAvailable ? 1 : 0));
    }

    return result;
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.deleteBook.emit(id);
    }
  }

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }
}
