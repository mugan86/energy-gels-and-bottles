import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataService } from './data.service';
export interface Item {
  title: string;
  completed: boolean;
  priority: number;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(private serv: DataService, private fb: FormBuilder) {}
  prio = [0, 1, 2];
  units = ['gr', 'kgr', 'unit'];
  toDoListForm!: FormGroup;
  ingredientsCostsForm!: FormGroup;
  itemsList: Item[] = [];

  ingredients: any = [];

  defaultItem = {
    title: '',
    completed: false,
    priority: null,
  };

  get itemsArray() {
    return <FormArray>this.toDoListForm.get('items');
  }

  get ingredientsArray() {
    return <FormArray>this.ingredientsCostsForm.get('ingredients');
  }

  ngOnInit(): void {
    this.toDoListForm = this.fb.group({
      items: this.fb.array([]),
    });

    this.ingredientsCostsForm = this.fb.group({
      ingredients: this.fb.array([]),
    });
    this.itemsList = this.serv.getmyData();
    this.ingredients = this.serv.getGelsIngredients();
    console.log(this.ingredients)
    this.displayItems();
  }

  createItem(item: any, type: string = '') {
    return type === '' ? this.fb.group({
      title: [item.title, [Validators.required]],
      completed: [item.completed, [Validators.required]],
      priority: [item.priority, [Validators.required]],
    }) :
    this.fb.group({
      code: [item.name, [Validators.required]],
      label: [item.label, [Validators.required]],
      price: [item.price, [Validators.required]],
      weight: [item.weight, [Validators.required]],
      unit: [item.unit, [Validators.required]],
      useWeight: [0, [Validators.required]],
      useUnit: [item.unit, [Validators.required]]
    });
   
  }

  addNewItem() {
    let formGroup = this.createItem(this.defaultItem);
    this.itemsArray.push(formGroup);

    this.ingredientsArray.push(this.createItem({
      code: '',
      label: '',
      price: '',
      weight: '',
      unit: null
    }, 'ingredients'))
  }

  displayItems() {
    let transformedItems = this.itemsList.map((item: any) =>
      this.createItem(item)
    );
    console.log(transformedItems);
    this.toDoListForm.setControl('items', this.fb.array(transformedItems));

    this.ingredientsCostsForm.setControl('ingredients', this.fb.array(this.ingredients.map((item: any) =>
      this.createItem(item, 'ingredients')
    )));

  }
  deleteItem(i: number) {
    this.itemsArray.removeAt(i);
  }

  deleteAll() {
    this.itemsArray.clear();
  }

  track(item: any, index: number) {
    return index;
  }
}
