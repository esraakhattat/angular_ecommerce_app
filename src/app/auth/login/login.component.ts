import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router){}
login(loginForm:any){
  if(loginForm.valid)
{
  alert(`welcome back ${loginForm.controls['email'].value}`)
  console.log(loginForm.value);
  this.router.navigate(['../'])
}

}
}
