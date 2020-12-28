import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { Ingridient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: Recipe[] = [
    new Recipe(
      'Omelete com Aveia',
      'Pra quem está naquela dieta monstro',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/387/233977/233977_original.jpg?mode=crop&width=710&height=400',
      [new Ingridient('Ovo', 2), new Ingridient('Aveia', 50)]
    ),
    new Recipe(
      'Pastel com Cachaça',
      'Ataque do device louco',
      'https://s2.glbimg.com/0U-uleyef2rgFDq8cE4lhrliMZQ=/0x0:960x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2019/5/R/81JTj0SlyzBStp3g3tfg/massa-pastel-receita.jpeg',
      [
        new Ingridient('Carne Moida ou Queijo Muçarela', 250),
        new Ingridient('Farinha', 150),
        new Ingridient('Sopa de Óleo', 2),
        new Ingridient('Água Morna', 50),
        new Ingridient('Sal', 50),
        new Ingridient('Cachaça', 50),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
