import { Component, OnInit } from '@angular/core';
import { CardStore } from '../cardstore';
import { ListSchema } from '../listschema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cardStore!: CardStore;
  lists?: ListSchema[];
  constructor() { }
  setMockData(): void {
    this.cardStore = new CardStore();
    const lists: ListSchema[] = [
      {
        name: 'Idea',
        cards: []
      },
      {
        name: 'Implementation',
        cards: []
      },
      {
        name: 'Completed',
        cards: []
      }
    ]
    this.lists = lists;
  }

  ngOnInit() {
    this.setMockData();
  }

}
