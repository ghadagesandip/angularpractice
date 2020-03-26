import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor  {

  private numberError:boolean;

  @Input('value') _value:boolean;
  onChange: any = () => {};
  onTouched: any = () => {}

  get value() {
    return this._value;
  };

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }

  setNumber(input){
    console.log('set no called')
    if(!isNaN(input)) {
      this.value = input;
      this.numberError = false;
    } else{
      this.numberError = true;
    }
  }

  public validate(c: FormControl) {
    return (this.numberError) ? null : {
        numberParseError: {
            valid: false,
        },
    };
}

}
