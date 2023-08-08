//ESTO AGREGA A LA PANTALLA EL VLAOR DEL BOTON
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//BORRA LA PANTALLA
function borrar(){
    document.getElementById('pantalla').value = ''
}

//EVAL CONVIERTE CUALQUIER STRING EN NUMERO Y PERMITE CALCULOS(SOLO EN JAVASCRIPT)
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}