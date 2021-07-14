import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public bol:boolean
  authenti(data:boolean)
  {
    this.bol=data
    
  }
  final()
  {
    return this.bol
  }
}
