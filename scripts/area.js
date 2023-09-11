$(function () {
    $("#btnRectangulo").on("click", AreaRectangulo);
    $("#btnTriangulo").on("click", AreaTriangulo);
    $("#btnCirculo").on("click", AreaCirculo);
    $("#btnSeleccionar").on("click", seleccionarFigura);
    $("#btnRegresar").on("click", resetParametros);
})
function AreaRectangulo() {
    if ($.isNumeric(document.getElementById("txtBase").value) && $.isNumeric(document.getElementById("txtAltura").value) 
    && document.getElementById("txtAltura").value > 0 && document.getElementById("txtBase").value > 0) {
        let base = document.getElementById("txtBase").value;
        let altura = document.getElementById("txtAltura").value;
        let resultado = (base*altura);
        $("#resultadoRectangulo").val(resultado);  
    }

    
}
function AreaTriangulo() {
   // $("#resultadoTriangulo").val(""); 
    if ($.isNumeric(document.getElementById("txtBaseTriangulo").value) && $.isNumeric(document.getElementById("txtAlturaTriangulo").value)
    && document.getElementById("txtBaseTriangulo").value > 0 && document.getElementById("txtAlturaTriangulo").value > 0) {
        let base = parseFloat(document.getElementById("txtBaseTriangulo").value);
        let altura = parseFloat(document.getElementById("txtAlturaTriangulo").value);
        let resultado = (base*altura)/2;
        $("#resultadoTriangulo").val(resultado); 
    }

    
}
function AreaCirculo() {
    if ($.isNumeric(document.getElementById("txtRadio").value) && document.getElementById("txtRadio").value > 0) {
        let radio = document.getElementById("txtRadio").value;
        let resultado = Math.PI*(Math.pow(radio,2));
        resultado = resultado.toFixed(2);
        $("#resultadoCirculo").val(resultado); 
    }
}

function limpiar(){
    $("#txtBase").val("");
    $("#txtAltura").val("");
    $("#resultadoRectangulo").val("");
    $("#txtBaseTriangulo").val("");
    $("#txtAlturaTriangulo").val("");
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