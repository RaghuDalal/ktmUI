import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rc390',
  templateUrl: './rc390.component.html',
  styleUrls: ['./rc390.component.css']
})
export class Rc390Component implements OnInit {


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
