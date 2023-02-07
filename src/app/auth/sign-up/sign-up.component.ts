import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConfirmValidator } from '../../validators/confirm-password';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
signUpForm:FormGroup
constructor(private router: Router){
  this.signUpForm=new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z]{3,}$/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,ConfirmValidator('confirm',true), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*(\W|_))(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    confirm: new FormControl('',[Validators.required,ConfirmValidator('password'),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*(\W|_))(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    username: new FormControl('',[Validators.required, Validators.pattern(/^\S*$/)]),
    addresses: new FormArray([])
  })
}

signUp(){
  if(this.signUpForm.valid){
    alert('registeration completed succussfully')
  console.log(this.signUpForm);
  console.log(this.addresses);
  this.router.navigate(['../'])
}
}
get getControls(){
  return this.signUpForm.controls
}
get addresses(){
  return this.signUpForm.controls['addresses'] as FormArray
}
addAddress(){
  const addressForm :FormGroup = new FormGroup({
    address: new FormControl(''),
    street: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
});
console.log(this.addresses);
this.addresses.push(addressForm);
}
deleteaddress(addressIndex: number) {
  this.addresses.removeAt(addressIndex);
}


}
