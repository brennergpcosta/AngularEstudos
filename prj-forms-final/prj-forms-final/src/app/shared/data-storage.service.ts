import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    this.http
      .put(
        environment.firebaseStorageLink + "recipes.json",
        this.recipeService.getRecipes()
      )
      .subscribe((respData) => {
        console.log("StoreRecipes() Response Data: ", respData);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(environment.firebaseStorageLink + "recipes.json")
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
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
