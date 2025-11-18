import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [FormsModule,EtudiantFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP1form');
}
