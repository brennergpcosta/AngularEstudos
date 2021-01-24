import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeData() {
    this.http
      .put(
        environment.dataStorageLink + "recipes.json",
        this.recipeService.getRecipes()
      )
      .subscribe((result) => {
        console.log("Data Storage: ", result);
      });
  }

  fetchData() {
    return this.http
      .get<Recipe[]>(environment.dataStorageLink + "recipes.json")
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipesList(recipes);
        })
      );
  }
}
