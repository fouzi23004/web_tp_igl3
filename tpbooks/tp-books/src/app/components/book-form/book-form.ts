import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm implements OnChanges {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;

  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();
  @Output() editCancelled = new EventEmitter<void>();

  @ViewChild('bookForm') bookForm!: NgForm;

  book: Book = new Book();
  isEditMode = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.book = { ...this.bookToEdit };
      this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEditMode) {
        this.bookUpdated.emit({ ...this.book });
      } else {
        this.bookAdded.emit({ ...this.book });
      }
      this.resetForm(form);
    }
  }

  resetForm(form: NgForm): void {
    this.book = new Book();
    this.isEditMode = false;
    form.resetForm();
  }

  cancelEdit(): void {
    this.editCancelled.emit();
    if (this.bookForm) {
      this.resetForm(this.bookForm);
    }
  }

  // Custom validation for title (not only digits)
  isTitleOnlyDigits(): boolean {
    return /^\d+$/.test(this.book.title);
  }
}
