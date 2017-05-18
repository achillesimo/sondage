import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: ChoicesComponent}
  ]
})
export class ChoicesComponent implements ControlValueAccessor {
  choice: number = 0;
  onChange: (value: any) => void;
  constructor() { }

  // Model to view
  writeValue(value: any) : void {
     this.choice = value;
  }

  // View to model
  registerOnChange(callback: any) : void {
    this.onChange = callback;
  }
  registerOnTouched(callback: any) : void {

  }

  public setChoice(choice: number): void {
    this.choice = choice;
    this.onChange(choice);
  }
}
