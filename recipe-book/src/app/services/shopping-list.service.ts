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

  ingredientAdded = new Subject<Ingridient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingridient) {
    this.ingredients.push(newIngredient);
    this.ingredientAdded.next(this.ingredients);
  }

  addArrayOfIngredients(newIngredients: Ingridient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientAdded.next(this.ingredients);
  }
}
