import { Book } from '../models/Book';
import { Person, Role } from '../models/Person';
import { Repository } from '../utils/Repository';

export class Library {
  private bookRepository: Repository<Book>;
  private userRepository: Repository<Person>;

  constructor() {
    this.bookRepository = new Repository<Book>();
    this.userRepository = new Repository<Person>();
  }

  addBook(book: Book): void {
    this.bookRepository.add(book);
    console.log(`Book "${book.title}" added to library.`);
  }

  removeBook(id: number): boolean {
    const result = this.bookRepository.remove(id);
    if (result) {
      console.log(`Book with ID ${id} removed.`);
    } else {
      console.log(`Book with ID ${id} not found.`);
    }
    return result;
  }

  searchBook(query: string): Book[] {
    return this.bookRepository
      .getAll()
      .filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      );
  }

  borrowBook(bookId: number, user: Person): boolean {
    const book = this.bookRepository.findById(bookId);
    if (!book) {
      console.log("Book not found.");
      return false;
    }
    if (!book.available) {
      console.log("Book is already borrowed.");
      return false;
    }
    book.available = false;
    console.log(`${user.name} borrowed "${book.title}".`);
    return true;
  }

  returnBook(bookId: number, user: Person): boolean {
    const book = this.bookRepository.findById(bookId);
    if (!book) {
      console.log("Book not found.");
      return false;
    }
    if (book.available) {
      console.log("Book was not borrowed.");
      return false;
    }
    book.available = true;
    console.log(`${user.name} returned "${book.title}".`);
    return true;
  }

  getAllBooks(): Book[] {
    return this.bookRepository.getAll();
  }

  addUser(user: Person): void {
    this.userRepository.add(user);
  }

  getAllUsers(): Person[] {
    return this.userRepository.getAll();
  }
}