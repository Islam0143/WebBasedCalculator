package com.calculator.operations.controller;

public class Expression {
    private float operand1;
    private String operator;
    private float operand2;

    public void setoperand1(float operand1){
        this.operand1 = operand1;
    }
    public void setoperand2(float operand2){
        this.operand2 = operand2;
    }
    public void setoperator(String operator){
        this.operator = operator;
    }
    public float getoperand1(){
        return operand1;
    }
    public float getoperand2(){
        return operand2;
    }
    public String getoperator(){
        return operator;
    }

}
