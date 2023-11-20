import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-media-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media-calculadora.component.html',
  styleUrl: './media-calculadora.component.css'
})
export class MediaCalculadoraComponent {
  result: number = 0;

  onSubmit(f: NgForm) {
    let ac1: number = f.value.ac1;
    let ac2: number = f.value.ac2;
    let ag: number = f.value.ag;
    let af: number = f.value.af;

    // Média Final = (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)
    let result: number = eval(`(${ac1} * 0.15) + (${ac2} * 0.3) + (${ag} * 0.1) + (${af} * 0.45)`);
    this.result = Math.round(result * 100) / 100;
  }
}
