import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Array<number> = [1, 2, 3, 4, 5];
  four: number = 4;
  cardOnTop:number = 4;

  constructor() { }

  ngOnInit(): void {
  }

  cardMarginTop(i: number): string {
    return (16 - (this.four * i) )+ 'rem';
  }

  bringOnTop(cardIndex: number) {
    console.log(cardIndex);
  }

}
