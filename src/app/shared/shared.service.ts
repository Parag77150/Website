import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public login:string
  public pass:string
  public auth:string
  constructor() { }
  
  setid(data: string)
  {
    this.login=data
    
  }
  setpass(data1:string)
  {
    this.pass=data1
  }
  getid()
  {
    return this.login
  }
  getpss()
  {
    return this.pass
  }
  
}
