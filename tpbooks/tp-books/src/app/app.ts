import { Component } from '@angular/core';
import { BookContainer } from './components/book-container/book-container';

@Component({
  selector: 'app-root',
  imports: [BookContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
