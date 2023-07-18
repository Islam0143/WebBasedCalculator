import { Component } from '@angular/core';
import { InfixService } from './infix.service';
import { ScreenService } from './screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';


  constructor(private screen: ScreenService, private infix: InfixService) { }


  put(str:string){
    this.screen.put(str);
  }

  Setoperator(operator : string){
    this.infix.Setoperator(operator);
  }

  UnaryOperation(operator : string){
    this.infix.UnaryOperation(operator);
  }

  sendData(param : string){
    this.infix.sendData(param);
  }

  clr() : void{
    this.screen.input.value = null;
    this.infix.opcount = 0;
    this.infix.operand1 = this.screen.input;
    this.infix.operator1 = null;
  }
  IsOperator(char : string) : boolean {
    if(char == "+" || char == "-" || char == "×" || char == "÷")
      return true;
    else
      return false;
  }
  DeleteLastChar() : void{
    if(this.screen.input != null){
      let LastChar = this.screen.input.value[this.screen.input.value.length-1];
      this.screen.input.value = this.screen.input.value.substring(0,this.screen.input.value.length - 1);
      if(this.IsOperator(LastChar)){
        this.infix.opcount = 0;
        this.infix.operand1 = this.screen.input.value;
        this.infix.operator1 = null;
      }
    }
  }
  SwitchSign() : void{
    if(this.screen.input == null){
      this.screen.put('-');
      return;
    }
    if(this.infix.opcount == 0){
      if(this.screen.input.value[0] == '-')
        this.screen.input.value = this.screen.input.value.substring(1,this.screen.input.value.length);
      else
        this.screen.input.value = '-' + this.screen.input.value;
    }
    else{
      let index = this.screen.input.value.substring(1,this.screen.input.value.length).indexOf(this.infix.operator1) + 1;
      if(this.screen.input.value.length == index +1){
        this.screen.input.value += '-';
      }
      else{
        if(this.screen.input.value[index+1] == '-'){
          this.screen.input.value = this.screen.input.value.substring(0,index+1) + this.screen.input.value.substring(index+2,this.screen.input.value.length); 
        }
        else{
          this.screen.input.value = this.screen.input.value.substring(0,index+1) + '-' + this.screen.input.value.substring(index+1,this.screen.input.value.length); 
        }
      }
    }
  }

}
 