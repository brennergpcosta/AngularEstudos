import { EventEmitter, Injectable } from '@angular/core';
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

  ingredientAdded = new EventEmitter<Ingridient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingridient) {
    this.ingredients.push(newIngredient);
    this.ingredientAdded.emit(this.ingredients);
  }

  addArrayOfIngredients(newIngredients: Ingridient[]){
    this.ingredients.push(...newIngredients);
    this.ingredientAdded.emit(this.ingredients);
  }
}
