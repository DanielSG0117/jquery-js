var valor1;
var valor2;

var STATE_INIT=0;
var STATE_CAPTURE=2;
var STATE_OPERATOR=3;
var STATE_CALCULATE=4;

var OPERATION_CLEAN=0;
var OPERATION_NUMBER=1;
var OPERATION_OPERATOR=2;
var OPERATION_EQUAL=3;


var OPERATOR_SUMA=0;
var OPERATOR_RESTA=1;
var OPERATOR_MULTIPLICACION=2;
var OPERATOR_DIVISION=3;
var OPERATOR_PORCENTAJE=4;


var estado; 
var operador;

$(function(){
    estado = STATE_INIT;
    $("#btnLimpiar").bind("click",reset);
    $("#btn0").bind("click",capturandoNumero);
    $("#btn1").bind("click",capturandoNumero);
    $("#btn2").bind("click",capturandoNumero);
    $("#btn3").bind("click",capturandoNumero);
    $("#btn4").bind("click",capturandoNumero);
    $("#btn5").bind("click",capturandoNumero);
    $("#btn6").bind("click",capturandoNumero);
    $("#btn7").bind("click",capturandoNumero);
    $("#btn8").bind("click",capturandoNumero);
    $("#btn9").bind("click",capturandoNumero);
    $("#btnPunto").bind("click",capturandoNumero);
    $("#btnPorcentaje").bind("click",capturandoOperador);
    $("#btnDividir").bind("click",capturandoOperador);
    $("#btnMult").bind("click",capturandoOperador);
    $("#btnResta").bind("click",capturandoOperador);
    $("#btnSuma").bind("click",capturandoOperador);
    $("#btnIgual").bind("click",solicitarResultado);
  
})

function limpiarDisplay(){
    $("#txtDisplay").val("");
}

function actualizarDisplay(valor){
    if(estado==STATE_INIT || estado==STATE_CAPTURE){
        if($.isNumeric($("#txtDisplay").val()+valor)){
            $("#txtDisplay").val($("#txtDisplay").val()+valor);
        }   
    }else if(estado==STATE_OPERATOR){
        valor1=$("#txtDisplay").val();
        limpiarDisplay();
        $("#txtDisplay").val(valor);   
    }else if(estado==STATE_CALCULATE){
        valor2=$("#txtDisplay").val();
        var resultado = calcular(operador,valor1,valor2);
        $("#txtDisplay").val(resultado);  
    }
    console.log("Display: "+$("#txtDisplay").val());
    console.log("Estado: "+estado);
    console.log("======================");

    
   
}

function capturandoNumero(){
    actualizarDisplay($(this).val());
    actualizarEstado(OPERATION_NUMBER);
}

function actualizarEstado(operacion){
    if(operacion==OPERATION_CLEAN){
        estado = STATE_INIT;
    }else if(estado==STATE_INIT && operacion==OPERATION_NUMBER || estado==STATE_OPERATOR && operacion==OPERATION_NUMBER){
        estado = STATE_CAPTURE;
    } else if(estado==STATE_CAPTURE && operacion==OPERATION_OPERATOR || estado==STATE_CALCULATE && operacion==OPERATION_OPERATOR){
        estado = STATE_OPERATOR;
    }else if(estado==STATE_CAPTURE && operacion==OPERATION_EQUAL){
        estado=STATE_CALCULATE;
    }

}

function capturandoOperador(){
    actualizarEstado(OPERATION_OPERATOR);
    if($(this).val()=="x"){
        operador = OPERATOR_MULTIPLICACION;
    }else if($(this).val()=="+"){
        operador = OPERATOR_SUMA;
    }else if($(this).val()=="-"){
        operador = OPERATOR_RESTA;
    }else if($(this).val()=="/"){
        operador = OPERATOR_DIVISION;
    }else if($(this).val()=="%"){
        operador = OPERATOR_PORCENTAJE;
    }
    console.log("Estado: "+estado+"-"+operador);
    console.log("======================");
}

function reset(){
    limpiarDisplay();
    actualizarEstado(OPERATION_CLEAN);
}

function solicitarResultado(){
    actualizarEstado(OPERATION_EQUAL);
    actualizarDisplay();
}

function calcular(operador,valor1,valor2){
    var resultado;
    valor1=parseFloat(valor1);
    valor2=parseFloat(valor2);
    if(operador==OPERATOR_MULTIPLICACION){
        resultado = valor1*valor2;
    }else if(operador==OPERATOR_SUMA){
        resultado = valor1+valor2;
    }else if(operador==OPERATOR_RESTA){
        resultado = valor1-valor2;
    }else if(operador==OPERATOR_DIVISION){
        resultado = valor1/valor2;
    }else if(operador==OPERATOR_PORCENTAJE){
        resultado = (valor1*valor2)/100;
    }
    return resultado;
}