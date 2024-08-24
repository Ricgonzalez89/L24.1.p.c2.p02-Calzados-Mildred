export default class Cl_vVendedor{
    constructor(controlador){
        this.vista = document.getElementById("vendedorForm");
        this.inCod = document.getElementById("vendedorForm_inCod");
        this.inSuelB = document.getElementById("vendedorForm_inSuelB");
        this.inVenta = document.getElementById("vendedorForm_inMontVenta");
        this.btAceptar = document.getElementById("vendedorForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarVendedor({
                cod: this.inCod.value,
                suelB: this.inSuelB.value,
                venta: this.inVenta.value,
            });
        this.ocultar();
    }

    mostrar(){
        this.vista.hidden = false;
    }

    ocultar(){
        this.vista.hidden = true;
    }
}