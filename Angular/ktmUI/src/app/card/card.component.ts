import { Component, OnInit } from '@angular/core';
// import * as abc from '../../assets/js/card.js';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  whiteImage=false;
  orangeImage=true;

  constructor() { 
    // abc.abc();
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
