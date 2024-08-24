export default class Cl_vZapateria{
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblPromedioVenta = document.getElementById("mainForm_lblPromedioVenta");
        this.lblMayor = document.getElementById("mainForm_lblMayorVenta");
        this.btAgregar.onclick = () => controlador.mostrarVistaVendedor();
    }

    mostrar(){
        this.vista.hidden = false;
    }

    ocultar(){
        this.vista.hidden = true;
    }

    reportarVendedor({
        cod,
        suelB,
        venta,
        suelT,
        mayor,
        promedio
    }){
        this.tabla.innerHTML += `
        <tr>
            <td>${cod}</td>
            <td>${suelB}</td>
            <td>${venta}</td>
            <td>${suelT}</td>
        </tr>`;
        this.lblPromedioVenta.innerHTML = promedio;
        this.lblMayor.innerHTML = mayor;
    }
}