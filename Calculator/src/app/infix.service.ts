import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ScreenService } from './screen.service';

@Injectable({
  providedIn: 'root'
})
export class InfixService {

  constructor(private screen: ScreenService, private httpservice: HttpService) { }

  expression = {"operand1": 0, "operator": null, "operand2": 0};

  operand1: any;
  operator1: any;
  operand2: any;
  operator2: any;
  opcount = 0;


  Setoperand1(){
    this.operand1 = this.screen.input.value;
  }

  Setoperand2(){
    let index = this.screen.input.value.substring(1,this.screen.input.value.length).indexOf(this.operator1) + 1;
    this.operand2 = this.screen.input.value.substring(index + 1,this.screen.input.value.length);
  }

  Setoperator(operator : string) : void{
    if(this.screen.input == null && operator == '-'){
      this.screen.put('-');
      return;
    }
    if(this.opcount == 0){
      this.operator1 = operator;
      this.Setoperand1();
      this.opcount++;
      this.screen.put(operator);
    } 
    else if(this.opcount == 1){
      this.operator2 = operator;
      this.Setoperand2();
      this.opcount++;
      this.sendData("");
    }
  }
  

  UnaryOperation(operator : string){
    this.operator2 = operator;
    this.expression.operator = this.operator2;
    if(this.opcount == 0){
      this.Setoperand1();
      this.expression.operand1 = this.operand1;
      if(this.expression.operand1 == 0 && operator == "1/"){
        this.screen.input.value = "Can't divide by Zero";
        return;
      }
      this.httpservice.OurRequest("http://localhost:8080", this.expression ).subscribe(data => this.screen.input.value = data);
    }
    else if(this.opcount == 1){
      this.Setoperand2();
      this.expression.operand1 = this.operand2;
      let index = this.screen.input.value.indexOf(this.operator1);
      if(this.expression.operand1 == 0 && operator == "1/"){
        this.screen.input.value = "Can't divide by Zero";
        return;
      }
      this.httpservice.OurRequest("http://localhost:8080", this.expression ).subscribe(data => this.screen.input.value = this.screen.input.value.substring(0,index +1) + data);
    }
  }

  sendData(param : string) : void{
    if(param == '=')
      this.Setoperand2();
    this.expression.operand1 = +this.operand1;
    this.expression.operand2 = +this.operand2;
    this.expression.operator = this.operator1;
    if(this.expression.operand2 == 0 && this.expression.operator == '÷'){
      this.screen.input.value = "Can't divide by Zero";
      return;
    }
    this.httpservice.OurRequest("http://localhost:8080", this.expression ).subscribe(data =>{
      if(param == '=')
        this.screen.input.value = data;
      else
        this.screen.input.value = data + this.operator2;
      this.opcount--;
      this.operator1 = this.operator2;
      this.operand1 = data;
    });
  }

}
