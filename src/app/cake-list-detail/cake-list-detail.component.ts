import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cake-list-detail',
  templateUrl: './cake-list-detail.component.html',
  styleUrls: ['./cake-list-detail.component.css']
})
export class CakeListDetailComponent implements OnInit {

  constructor( private router:Router, private activatedRoute:ActivatedRoute) { }

  cakeDetail: any;
  imageUrl: string ="";
  cakeList = [
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
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(event => {
      this.cakeDetail = this.cakeList.filter(item => item.id === Number(event['id']))[0];
      this.imageUrl = this.cakeDetail;
     });
  }
  close(){
    this.cakeDetail = null;
  }
}
