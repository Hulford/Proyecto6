import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorr implements AsyncValidator{

validate(control: AbstractControl): Observable<ValidationErrors | null > {
const email = control.value;
console.log({ email })
return of({
  emailTaken: true
}).pipe(
  delay(2000)
);

}


}
