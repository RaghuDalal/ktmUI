import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
url="../../assets/img/duke390orange.png";

  constructor() { 
  }

  ngOnInit(): void { 
    this.orange();
  }

  white(){
    this.url="../../assets/img/dukeWhite.png";
  }

  orange(){
    this.url="../../assets/img/duke390orange.png";
  }

}
