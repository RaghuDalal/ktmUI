import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  whiteImage=false;
  orangeImage=true;

  constructor() { 

  }

  ngOnInit(): void { 
    this.orangeImage=true;  
  }

  white(){
    this.whiteImage=true;
    this.orangeImage=false;
  }

  orange(){
    this.whiteImage=false;
    this.orangeImage=true;
  }

}
