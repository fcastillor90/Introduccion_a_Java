function calcularTotal(){
    let cantidad = Number(document.querySelector("#cantidad").value);
    let color = document.querySelector("#color").value;
    let precio = Number(document.querySelector("#precio").innerText);

    let total = cantidad * precio;

    let totalElement = document.querySelector("#totalElement");
    totalElement.innerHTML = total;

    let cantidadElement = document.querySelector("#cantidadElement");
    cantidadElement.innerHTML = cantidad;

    document.querySelector("#colorElement").style.backgroundColor = color;
}
