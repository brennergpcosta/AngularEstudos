import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelectedOutput = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected() {
    this.recipeSelectedOutput.emit()
  }
}
