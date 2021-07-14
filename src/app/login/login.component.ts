import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import {Router} from'@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit 
{

  public loginid:string
  public loginpass:string
  

  constructor(public shared:SharedService, public router:Router, public authservice:AuthService) { }
  
  submitlog()
  {
    if(this.shared.getid()==this.loginid && this.shared.getpss()==this.loginpass ) 
    {
    console.log('same id')
    this.router.navigateByUrl('profile')
    this.authservice.authenti(true)
    }
    else
    {
    console.log('not match')
    alert("wrong creditentials")
    }
  }
  
  ngOnInit(): void {
  
}
}
