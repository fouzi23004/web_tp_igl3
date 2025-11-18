import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EtudiantFormComponent {

  classes = ['L2DSI1', 'L2DSI2',
  'L2DSI3', 'L3DSI1','L3DSI2'];

  model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newEtudiant() {
    this.model = new Etudiant(42, '', '');
  }
}
