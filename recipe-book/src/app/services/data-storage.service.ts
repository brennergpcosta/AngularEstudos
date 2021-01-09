import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  // createAndStoreRecipe(newRecipe: Recipe){
  //   // const newRecipe = new Recipe(name, description, imagePath, ingredients);
  //   this.http.post(
  //     'https://ng-recipe-book-1bab1-default-rtdb.firebaseio.com/recipes.json',
  //     newRecipe
  //   ).subscribe(
  //     (responseData) => {
  //       console.log("Post -> responseData: ", responseData);
  //     }
  //   ), (error) => {
  //     console.log("Post -> error: ", error);
  //   }
  // }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-recipe-book-1bab1-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  // fetcheRecipes() {
  //   return this.http
  //     .get(
  //       'https://ng-recipe-book-1bab1-default-rtdb.firebaseio.com/recipes.json',
  //       {
  //         params: new HttpParams().set('print', 'pretty'),
  //       }
  //     )
  //     .pipe(
  //       map((responseData) => {
  //         const recipesArray: Recipe[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty.call(key)) {
  //             recipesArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return recipesArray;
  //       })
  //     );
  // }

  fetcheRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-book-1bab1-default-rtdb.firebaseio.com/recipes.json'
      )
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
          this.recipeService.pushNewRecipeList(recipes);
        })
      );
  }

  deleteRecipes() {
    return this.http.delete(
      'https://ng-recipe-book-1bab1-default-rtdb.firebaseio.com/recipes.json'
    );
  }
}
