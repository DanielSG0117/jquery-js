$(function () {
    $("#btnCilindro").on("click", volumenCilindro);
    $("#btnCono").on("click", volumenCono);
    $("#btnCubo").on("click", volumenCubo);
    $("#btnSeleccionar").on("click", seleccionarFigura);
    $("#btnRegresar").on("click", resetParametros);
})
function volumenCilindro() {
    if ($.isNumeric(document.getElementById("txtRadioCilindro").value) && $.isNumeric(document.getElementById("txtAlturaCilindro").value) 
    && document.getElementById("txtRadioCilindro").value > 0 && document.getElementById("txtAlturaCilindro").value > 0) {
        let radio = document.getElementById("txtRadioCilindro").value;
        let altura = document.getElementById("txtAlturaCilindro").value;
        let resultado = (Math.PI*(Math.pow(radio,2)))*altura;
        resultado = resultado.toFixed(2);
        $("#resultadoCilindro").val(resultado);  
    }

    
}
function volumenCono() {
    //$("#resultadoTriangulo").val(""); 
    if ($.isNumeric(document.getElementById("txtRadioCono").value) && $.isNumeric(document.getElementById("txtAlturaCono").value)
    && document.getElementById("txtRadioCono").value > 0 && document.getElementById("txtAlturaCono").value > 0) {
        let radio = parseFloat(document.getElementById("txtRadioCono").value);
        let altura = parseFloat(document.getElementById("txtAlturaCono").value);
        let resultado = 1/3*(Math.PI*(Math.pow(radio,2))*altura);
        resultado = resultado.toFixed(2);
        $("#resultadoCono").val(resultado); 
    }

    
}
function volumenCubo() {
    if ($.isNumeric(document.getElementById("txtAnchoCubo").value) && document.getElementById("txtAnchoCubo").value > 0) {
        let a = document.getElementById("txtAnchoCubo").value;
        let resultado = Math.pow(a,3);
        resultado = resultado.toFixed(2);
        $("#resultadoCubo").val(resultado); 
    }
}

function limpiar(){
    $("#txtRadioCilindro").val("");
    $("#txtAlturaCilindro").val("");
    $("#resultadoCilindro").val("");
    $("#txtRadioCono").val("");
    $("#txtAlturaCono").val("");
    $("resultadoCono").val("")
    $("#txtAnchoCubo").val("");
    $("#resultadoCubo").val("")
}

function seleccionarFigura(){
    if($("#rdCilindro").prop("checked")){
        $("#divCilindro").removeClass("d-none");
        $("#divCono").addClass("d-none");
        $("#divCubo").addClass("d-none");
    }else if($("#rdCono").prop("checked")){
        $("#divCilindro").addClass("d-none");
        $("#divCono").removeClass("d-none");
        $("#divCubo").addClass("d-none");
    }else if($("#rdCubo").prop("checked")){
        $("#divCilindro").addClass("d-none");
        $("#divCono").addClass("d-none");
        $("#divCubo").removeClass("d-none");
    }else{
        alert("Seleccione una opcion");
    }
    $("#divFormulario").addClass("d-none");
    $("#btnRegresar").removeClass("d-none");
    console.log($("#rdCilindro").prop("checked")+" "+$("#rdCono").prop("checked")+" "+$("#rdCubo").prop("checked"));
}

function resetParametros(){
    $("#divCilindro").addClass("d-none");
    $("#divCono").addClass("d-none");
    $("#divCubo").addClass("d-none");
    $("#divFormulario").removeClass("d-none");
    $("#btnRegresar").addClass("d-none");
    document.getElementById("frmSeleccionar").reset();
    limpiar();
}

