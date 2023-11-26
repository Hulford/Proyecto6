import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear',  Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })

 constructor( private fb: FormBuilder){}
get favoriteGames(){
  return this.myForm.get('favoriteGames') as FormArray;
}

isValidFiel( field: string ): boolean | null{
  return this.myForm.controls[field].errors
  && this.myForm.controls[field].touched;

}
isValidFieldInArray(formArray: FormArray, i: number){
  return formArray.controls[i].errors
  && formArray.controls[i].touched;
}
getFieldError(field: string): string | null{
  if( !this.myForm.controls[field] ) return null;
const errors = this.myForm.controls[field].errors || {};
for (const key of Object.keys(errors)) {
  // console.log(key);
  switch( key ){
    case 'required':
      return 'Este campo es requerido';
      case 'minlength':
      return `Minimo ${errors ['minlength'].requiredLenght} caracters.`;
  }

}
return null;
}

onDelteFavorite( i:number):void{
this.favoriteGames.removeAt(i);
}
 onSubmit():void{
  if( this.myForm.invalid){
    this.myForm.markAllAsTouched();

    return;
  }


  console.log(this.myForm.value);
  this.myForm.reset();
 }
}
