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
  toDoListForm!: FormGroup;
  itemsList: Item[] = [];

  defaultItem = {
    title: '',
    completed: false,
    priority: null,
  };

  get itemsArray() {
    return <FormArray>this.toDoListForm.get('items');
  }

  ngOnInit(): void {
    this.toDoListForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.itemsList = this.serv.getmyData();
    this.displayItems();
  }

  createItem(item: any) {
    return this.fb.group({
      title: [item.title, [Validators.required]],
      completed: [item.completed, [Validators.required]],
      priority: [item.priority, [Validators.required]],
    });
  }

  addNewItem() {
    let formGroup = this.createItem(this.defaultItem);
    this.itemsArray.push(formGroup);
  }

  displayItems() {
    let transformedItems = this.itemsList.map((item: any) =>
      this.createItem(item)
    );
    console.log(transformedItems);
    this.toDoListForm.setControl('items', this.fb.array(transformedItems));
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
