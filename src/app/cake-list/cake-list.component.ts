import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  constructor( private router: Router,) { 
    
  }

  ngOnInit(): void {
  }
  cakelists = [
    {
      id:1,
      name: 'Chocolate',
      photo: '../assets/3.jpg',
      type: 'C',
      size: '3*4',
      price: '2000'
    },
    {
      id:2,
      name: 'BirthdayCake',
      photo: '../assets/1.jpg',
      type: 'B',
      size: '3*4',
      price: '3000'
    },
    {
      id:3,
      name: 'Strawberry',
      photo: '../assets/2.jpg',
      
      type: 'S',
      size: '3*4',
      price: '4000'
    },
    {
      id:4,
      name: 'Cheese',
      photo: '../assets/4.jpg',
      type: 'C',
      size: '3*4',
      price: '5000'
    }
  ];
  cakeDetail:any;
  goToDetail(data:any){
    this.router.navigateByUrl(`/cake/` + data.id, { state: data });
  }
}
