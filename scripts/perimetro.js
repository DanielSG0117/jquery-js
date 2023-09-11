$(function () {
    $("#btnRectangulo").on("click", calculaPerimetroRectangulo);
    $("#btnTriangulo").on("click", calculaPerimetroTriangulo);
    $("#btnCirculo").on("click", calculaPerimetroCirculo);
    $("#btnSeleccionar").on("click", seleccionarFigura);
    $("#btnRegresar").on("click", resetParametros);
})
function calculaPerimetroRectangulo() {
    if ($.isNumeric(document.getElementById("txtBase").value) && $.isNumeric(document.getElementById("txtAltura").value) 
    && document.getElementById("txtAltura").value > 0 && document.getElementById("txtBase").value > 0) {
        let base = document.getElementById("txtBase").value;
        let altura = document.getElementById("txtAltura").value;
        let calculo = (base *2)+(2* altura);
        document.getElementById("resultadoRectangulo").innerHTML = calculo;
        $("#resultadoRectangulo").val(calculo);  
        console.log("Estoy calculando:" + calculo);
    }

    
}
function calculaPerimetroTriangulo() {
    //document.getElementById("resultadoTriangulo").innerHTML = "";
    $("#resultadoTriangulo").val(""); 
    if ($.isNumeric(document.getElementById("txtLadoA").value) && $.isNumeric(document.getElementById("txtLadoB").value) && 
    $.isNumeric(document.getElementById("txtLadoC").value) && document.getElementById("txtLadoA").value > 0 && 
    document.getElementById("txtLadoB").value > 0 && document.getElementById("txtLadoC").value > 0) {
        let a = parseFloat(document.getElementById("txtLadoA").value);
        let b = parseFloat(document.getElementById("txtLadoB").value);
        let c = parseFloat(document.getElementById("txtLadoC").value);

        if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
            alert("Esto no puede ser un triangulo");
        } else {
            let calculo = a+b+c;
            document.getElementById("resultadoTriangulo").innerHTML = calculo;
            $("#resultadoTriangulo").val(calculo); 
            console.log("Estoy calculando:" + calculo);
        }
        
    }

    
}
function calculaPerimetroCirculo() {
    if ($.isNumeric(document.getElementById("txtRadio").value) && document.getElementById("txtRadio").value > 0) {
        let radio = document.getElementById("txtRadio").value;
        let calculo = (2*Math.PI)*radio;
        calculo = calculo.toFixed(2);
        document.getElementById("resultadoCirculo").innerHTML = calculo;
        $("#resultadoCirculo").val(calculo); 
        console.log("Estoy calculando:" + calculo);
    }
}

function limpiar(){
    $("#txtBase").val("");
    $("#txtAltura").val("");
    $("#resultadoRectangulo").val("");
    $("#txtLadoA").val("");
    $("#txtLadoB").val("");
    $("#txtLadoC").val("");
    $("#resultadoTriangulo").val("")
    $("#txtRadio").val("");
    $("#resultadoCirculo").val("")
}

function seleccionarFigura(){
    if($("#rdRectangulo").prop("checked")){
        $("#divRectangulo").removeClass("d-none");
        $("#divTriangulo").addClass("d-none");
        $("#divCirculo").addClass("d-none");
    }else if($("#rdTriangulo").prop("checked")){
        $("#divRectangulo").addClass("d-none");
        $("#divTriangulo").removeClass("d-none");
        $("#divCirculo").addClass("d-none");
    }else if($("#rdCirculo").prop("checked")){
        $("#divRectangulo").addClass("d-none");
        $("#divTriangulo").addClass("d-none");
        $("#divCirculo").removeClass("d-none");
    }else{
        alert("Seleccione una opcion");
    }
    $("#divFormulario").addClass("d-none");
    $("#btnRegresar").removeClass("d-none");
    console.log($("#rdRectangulo").prop("checked")+" "+$("#rdTriangulo").prop("checked")+" "+$("#rdCirculo").prop("checked"));
}

function resetParametros(){
    $("#divRectangulo").addClass("d-none");
    $("#divTriangulo").addClass("d-none");
    $("#divCirculo").addClass("d-none");
    $("#divFormulario").removeClass("d-none");
    $("#btnRegresar").addClass("d-none");
    document.getElementById("frmSeleccionar").reset();
    limpiar();

}

