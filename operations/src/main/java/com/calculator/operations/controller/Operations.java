package com.calculator.operations.controller;

public class Operations {
    public float Add(float operand1,float operand2){
        return operand1 + operand2;
    }
    public float Subtract(float operand1,float operand2){
        return operand1 - operand2;
    }
    public float Multiply(float operand1,float operand2){
        return operand1 * operand2;
    }
    public float Divide(float operand1,float operand2){
        return operand1 / operand2;
    }
    public float Percentage(float operand1){
        return operand1 / 100 ;
    }
    public float Square(float operand1){
        return operand1 * operand1;
    }
    public float SquareRoot(float operand1){
        return (float)Math.sqrt(operand1);
    }
    public float Inverse(float operand1){
        return 1 / operand1 ;
    }
}
