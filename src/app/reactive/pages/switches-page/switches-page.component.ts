import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {
public myForm: FormGroup = this.fb.group({
  gender: ['M', Validators.required],
  wantNotifications: [true, Validators.required],
  termsAndConditions: [ true, Validators.requiredTrue],
})

constructor(private fb: FormBuilder){}
onSave(){
  if(this.myForm.invalid) {
    this.myForm.markAllAsTouched();
    return;
  }
}


}
