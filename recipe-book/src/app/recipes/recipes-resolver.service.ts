import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';
import { RecipeService } from '../services/recipe.service';

import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetcheRecipes();
    } else {
      return recipes;
    }
  }
}
