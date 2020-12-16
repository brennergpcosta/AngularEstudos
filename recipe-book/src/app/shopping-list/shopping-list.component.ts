import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingridient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingridient[];

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (newIngredients: Ingridient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
}
