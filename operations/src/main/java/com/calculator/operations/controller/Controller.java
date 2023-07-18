package com.calculator.operations.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {

    @PostMapping("/")
     float Request(@RequestBody Expression expression) {
        String operator = expression.getoperator();
        float operand1 = expression.getoperand1();
        float operand2 = expression.getoperand2();
        float result=0;

        Operations operation = new Operations();

        switch(operator){
            case "+":
                result = operation.Add(operand1,operand2);
                break;
            case "-":
                result = operation.Subtract(operand1,operand2);
                break;
            case "×":
                result = operation.Multiply(operand1,operand2);
                break;
            case "÷":
                result = operation.Divide(operand1,operand2);
                break;
            case "%":
                result = operation.Percentage(operand1);
                break;
            case "²":
                result = operation.Square(operand1);
                break;
            case "√":
                result = operation.SquareRoot(operand1);
                break;
            case "1/":
                result = operation.Inverse(operand1);
                break;
        }

        return result;
    }
}
