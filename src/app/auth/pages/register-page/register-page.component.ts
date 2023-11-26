import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators'
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidatorr } from 'src/app/shared/validators/e-mail-validator.service';


@Component({
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent {
public myForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern)]],
//  email: ['', [Validators.required,  Validators.pattern( this.validatorsService.emailPatternern)], [new EmailValidatorr()]],
email: ['', [Validators.required,  Validators.pattern( this.validatorsService.emailPatternern)], [this.emailValidator]],
username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  password2: ['', [Validators.required]],

},{
  validators: [
    this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
  ]
}
)

constructor(
  private fb: FormBuilder,
  private validatorsService: ValidatorsService,
  private emailValidator: EmailValidatorr,
  ){}
isValidField(field: string){
return this.validatorsService.isValidField(this.myForm, field)
}



onSubmit(){
  this.myForm.markAllAsTouched();
}

}
