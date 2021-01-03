import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),
  ];

  constructor() {}

  listChange = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingridient) {
    this.ingredients.push(newIngredient);
    this.listChange.next(this.ingredients.slice());
  }

  addArrayOfIngredients(newIngredients: Ingridient[]) {
    this.ingredients.push(...newIngredients);
    this.listChange.next(this.ingredients.slice());
  }

  deleteLastIngredient() {
    this.ingredients.pop();
    this.listChange.next(this.ingredients.slice());
  }

  editItem(ingredient: Ingridient, index: number) {
    console.log('sei2', ingredient)
    this.ingredients[index] = ingredient;
    this.listChange.next(this.ingredients.slice());
  }

  deteleIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.listChange.next(this.ingredients.slice());
  }
}
