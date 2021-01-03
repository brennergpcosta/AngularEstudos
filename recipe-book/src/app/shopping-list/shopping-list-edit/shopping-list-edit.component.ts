import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingridient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') formInfo: NgForm;

  subs: Subscription = new Subscription();
  editMode: boolean = false;
  deleteMode: boolean = false;
  editedItemIdex: number;
  ingredientEdit: Ingridient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subs = this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIdex = index;
      this.ingredientEdit = this.slService.getIngredient(index);
      this.formInfo.setValue({
        name: this.ingredientEdit.name,
        amount: this.ingredientEdit.amount,
      });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onAdd(form: NgForm) {
    const formValue = form.value;
    this.slService.addIngredient(
      new Ingridient(form.value.name, form.value.amount)
    );
    this.formInfo.reset({ name: '', amount: 0 });
  }

  onDelete() {
    this.slService.deteleIngredient(this.editedItemIdex)
    this.onClear();
    this.editMode = false;
  }

  onClear() {
    this.formInfo.reset({ name: '', amount: 0 });
  }

  onEdit(name: string, amount: number) {
    this.slService.editItem(
      { name: name, amount: amount },
      this.editedItemIdex
    );
    this.editMode = false;
    this.formInfo.reset({ name: '', amount: 0 });
  }

  cancelEdit(){
    this.editMode = false;
    this.formInfo.reset({name: '', amount: 0})
  }
}
