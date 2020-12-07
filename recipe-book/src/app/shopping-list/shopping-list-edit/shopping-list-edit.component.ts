import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientOutput = new EventEmitter<Ingridient>();

  @ViewChild('nameInputTemplate') nameInputRef: ElementRef;
  @ViewChild('amountInputTemplate')
  amountInputRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.ingredientOutput.emit(
      new Ingridient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }

  onDelete() {}

  onClear() {
    console.log(this.nameInputRef);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0;
  }
}
