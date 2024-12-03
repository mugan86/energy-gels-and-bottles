import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { DataService } from './data.service';
export interface Item {
  title: string;
  completed: boolean;
  priority: number;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [JsonPipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(private serv: DataService, private fb: FormBuilder) {}
  units = [undefined, 'gr', 'kgr', 'unit'];
  ingredientsCostsForm!: FormGroup;

  ingredients: Array<any> = [];

  ingredientsLabels : Array<{
    code: string, name: string
  }> = [];


  get ingredientsArray() {
    return <FormArray>this.ingredientsCostsForm.get('ingredients');
  }

  ngOnInit(): void {

    this.ingredientsCostsForm = this.fb.group({
      ingredients: this.fb.array([]),
    });
    this.ingredients = this.serv.getGelsIngredients();
    this.ingredientsLabels = this.ingredients.map((item)=> {
      return {
        code: item.name,
        name: item.label
      }
    });
    this.ingredientsLabels.unshift({code: '', name: 'Producto'})
    console.log(this.ingredients)
    this.addNewItem();
  }

  createItem(item: any = '') {
    return this.fb.group({
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
    this.ingredientsArray.push(this.createItem({
      code: '',
      label: '',
      price: '',
      weight: '',
      unit: null
    }))
  }

  displayItems() {
    this.ingredientsCostsForm.setControl('ingredients', this.fb.array(this.ingredients.map((item: any) =>
      this.createItem(item)
    )));

  }
  deleteItem(i: number) {
    this.ingredientsArray.removeAt(i);
  }

  deleteAll() {
    this.ingredientsArray.clear();
    this.addNewItem();
  }
}
