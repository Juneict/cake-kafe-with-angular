import { Component, OnInit } from '@angular/core';
import { CakeService} from '../cake.service';
@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor(private cakeService: CakeService) { }
  cakes:any;
  name:any;
  type:any;
  size:any;
  price:any;
  photo:any;
  selectedCake:any;
  appState = 'default';
  oldName:any;
  oldType:any;
  oldSize:any;
  oldPrice:any;
  oldPhoto:any;
  ngOnInit(): void {
    this.cakes = this.cakeService.getCakes();
  }
  
  onSelect(data:any){
    this.selectedCake =data;
  }
  DeleteFunction(data:any){
    var index = this.cakes.indexOf(data);
    this.cakes.splice(index,1);
  }
  UpdateFunction(data:any){
    this.selectedCake.name = data.name;
    this.selectedCake.price = data.price;
  }
  addCake(){
    let newCake = {
      name:this.name,
      type:this.type,
      size:this.size,
      price:this.price,
      photo:'../assets/3.jpg'
    }
    console.log(newCake);
    this.cakes.push(newCake);
    this.cakeService.addCake(newCake);
    this.name='',
    this.type='',
    this.size='',
    this.price=''
  }
  editCake(cake:any){
    this.appState='edit',
    this.oldName=cake.name,
    this.oldPrice=cake.price,
    this.oldSize=cake.size,
    this.oldType=cake.type,
    this.name=cake.name,
    this.price=cake.price,
    this.size=cake.size,
    this.type=cake.type
  }
  updateCake(){
    console.log(this.oldType);
    for(let i= 0; i < this.cakes.length; i++){

      if(this.cakes[i].name == this.oldName){
        this.cakes[i].name =this.name;
      }

      if(this.cakes[i].price == this.oldPrice){
        this.cakes[i].price =this.price;
      }

      if(this.cakes[i].size == this.oldSize){
        this.cakes[i].size =this.size;
      }

      if(this.cakes[i].type == this.oldType){
        this.cakes[i].type =this.type;
      }

    }

    this.cakeService.updateCake(this.oldName, this.name,this.oldPrice,this.price,this.size,this.oldSize,this.type,this.oldType);
  }
  deleteCake(name: any) {
    for(let i = 0; i < this.cakes.length; i++) {
      if(this.cakes[i].name == name) {
          this.cakes.splice(i, 1);
      }
    }

    this.cakeService.deleteCake(name);
  }
}
