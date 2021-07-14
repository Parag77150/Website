import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import{stringify} from'@angular/compiler/src/util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  
  constructor(public shared: SharedService) { }
   public name:string
   public pass:string
   submit()
   {
    this.shared.setid(this.name)
    this.shared.setpass(this.pass)
    console.log('Registeration successful')
    console.log(this.shared.getid()) 
    console.log(this.shared.getpss())

   }

  ngOnInit(): void {
   
  }

}
