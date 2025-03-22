import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { likesBlogs } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){
    const likesBlogs = [
      { like: localStorage.getItem('likesBlogs0') },
      { like: localStorage.getItem('likesBlogs1') },
      { like: localStorage.getItem('likesBlogs2') },
    ]

    this.likesBlogs[0].like = likesBlogs[0].like ? JSON.parse(likesBlogs[0].like) : false;
    this.likesBlogs[1].like = likesBlogs[1].like ? JSON.parse(likesBlogs[1].like) : false;
    this.likesBlogs[2].like = likesBlogs[2].like ? JSON.parse(likesBlogs[2].like) : false;
  }

  search: string = '';
  valueTop: number = 10;

  checkSearchEmpty(focus: boolean, blur: boolean): void {
    if(this.search === '' && focus) this.valueTop = -20;
    if(this.search === '' && blur) this.valueTop = 10;
  }

  likesBlogs: likesBlogs[] = [
    { id: 0, like: false },
    { id: 1, like: false },
    { id: 2, like: false },
  ];

  saveLikeStorage(id: number): void{
    localStorage.setItem(`likesBlogs${id}`, JSON.stringify(this.likesBlogs[id].like));
  }
}
