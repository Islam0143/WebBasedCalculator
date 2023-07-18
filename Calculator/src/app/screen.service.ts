import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor() { }

  input: any;

  Setinput() : void{
    this.input = document.getElementById('result') as HTMLInputElement | null;
  }

  put(str: string){
    this.Setinput();
    if(this.input != null) this.input.value += str;
  }

}
