import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor() { }

  getCakes() {
    let cakes = JSON.parse(localStorage.getItem('cakes')|| '[]');
    return cakes;
  }
  addCake(newCake: any) {
    let cakes = JSON.parse(localStorage.getItem('cakes') || '[]');
    // Add New TodoService
    cakes.push(newCake);
    // Set New Todos
    localStorage.setItem('cakes', JSON.stringify(cakes));
  }
  updateCake(oldName: any, newName: any,oldPrice:any , newPrice:any, oldSize:any, newSize:any, oldType:any, newType:any) {
    let cakes = JSON.parse(localStorage.getItem('cakes')|| '[]');

    for (let i = 0; i < cakes.length; i++) {
        if (cakes[i].name == oldName) {
            cakes[i].name = newName;
        }
        if (cakes[i].price == oldPrice) {
          cakes[i].price = newPrice;
        }
        if (cakes[i].size == oldSize) {
          cakes[i].size = newSize;
        }
        if (cakes[i].type == oldType) {
          cakes[i].type = newType;
        }
    }
    // Set New Todos
    localStorage.setItem('cakes', JSON.stringify(cakes));
  }
  deleteCake(name: any) {
    let cakes = JSON.parse(localStorage.getItem('cakes')|| '[]');

    for (let i = 0; i < cakes.length; i++) {
        if (cakes[i].name == name) {
          cakes.splice(i, 1);
        }
    }
    // Set New Todos
    localStorage.setItem('cakes', JSON.stringify(cakes));
}
}
