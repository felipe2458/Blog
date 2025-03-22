import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  search: string = '';
  valueTop: number = 10;

  checkSearchEmpty(focus: boolean, blur: boolean): void {
    if(this.search === '' && focus) this.valueTop = -20;
    if(this.search === '' && blur) this.valueTop = 10;
  }
}
