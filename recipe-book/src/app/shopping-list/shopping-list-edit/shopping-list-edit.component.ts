import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingridient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  // @Output() ingredientOutput = new EventEmitter<Ingridient>();

  @ViewChild('nameInputTemplate') nameInputRef: ElementRef;
  @ViewChild('amountInputTemplate')
  amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  // onAdd() {
  //   this.ingredientOutput.emit(
  //     new Ingridient(
  //       this.nameInputRef.nativeElement.value,
  //       this.amountInputRef.nativeElement.value
  //     )
  //   );
  //   this.nameInputRef.nativeElement.value = '';
  //   this.amountInputRef.nativeElement.value = 0;
  // }

  onAdd() {
    this.shoppingListService.addIngredient(
      new Ingridient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
    // this.shoppingListService.ingredientAdded.emit(
    //   this.shoppingListService.getIngredients()
    // ); Coloquei no shoppingListService pq o cara é um gênio
  }

  onDelete() {}

  onClear() {
    console.log(this.nameInputRef);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }
}
