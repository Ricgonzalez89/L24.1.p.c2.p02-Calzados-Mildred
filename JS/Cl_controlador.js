import Cl_vZapateria from "./Cl_vZapateria.js";
import Cl_vVendedor from "./Cl_vVendedor.js";
import Cl_mZapateria from "./Cl_mZapateria.js";
import Cl_mVendedor from "./Cl_mVendedor.js";

export default class Cl_controlador{
    constructor(){
        this.mZapateria = new Cl_mZapateria();
        this.vZapateria = new Cl_vZapateria(this);
        this.vVendedor = new Cl_vVendedor(this);
    }

    mostrarVistaVendedor(){
        this.vZapateria.ocultar();
        this.vVendedor.mostrar();
    }

    mostrarVistaZapateria(){
        this.vZapateria.mostrar();
        this.vVendedor.ocultar();
    }

    agregarVendedor({cod, suelB, venta}){
        let ven = new Cl_mVendedor({cod, suelB, venta});
        this.mZapateria.procesarVendedor(ven);
        this.vZapateria.reportarVendedor({
            cod: ven.cod,
            suelB: ven.suelB,
            venta: ven.venta,
            suelT: ven.suelTotal().toFixed(2),
            mayor: this.mZapateria.devolverMayor(),
            promedio: this.mZapateria.promedioVenta().toFixed(2),
        });
        this.mostrarVistaZapateria();
    }
}