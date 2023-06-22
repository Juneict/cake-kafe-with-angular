import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  @Input() cake:any;
  @Output() cakeDelete = new EventEmitter;
  @Output() cakeUpdate = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  deleteCake(data:any){
    this.cakeDelete.emit(data);
  }
  updateCake(data:any){
    this.cakeUpdate.emit(data);
  }
}
