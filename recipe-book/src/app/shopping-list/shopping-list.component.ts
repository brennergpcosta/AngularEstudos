import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingridient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingridient[];
  private subscription: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.subscription = this.shoppingListService.listChange.subscribe(
      (ingredientsList: Ingridient[]) => {
        this.ingredients = ingredientsList;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
