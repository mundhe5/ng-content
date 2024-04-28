import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accor',
  templateUrl: './accor.component.html',
  styleUrls: ['./accor.component.scss']
})
export class AccorComponent implements OnInit {
    isexpand:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.isexpand=!this.isexpand
  }

}
