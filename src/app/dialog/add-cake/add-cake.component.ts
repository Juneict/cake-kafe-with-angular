import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.css']
})
export class AddCakeComponent implements OnInit {
  @Output() closeDialog = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(): void{
    this.closeDialog.emit({id:"hello"});
  }
  cakeTypes = [
    {
      name: 'C'
    },
    {
      name: 'A'
    },
    {
      name: 'S'
    },
    {
      name: 'B'
    },
  ];
  cakeSizes = [
    {
      name: '10*10'
    },
    {
      name: '9*8'
    },
    {
      name: '15*5'
    },
    {
      name: '20*25'
    },
  ];
}
