/* 11. - CALZADOS "MILDRED"
|* Calzados “Mildred” establece las siguientes políticas para sus vendedores: un sueldo base y
|* cada vendedor tendrá una comisión del 25% sobre el monto vendido. De cada empleado se sabe:
|* su código y monto vendido. Se requiere un programa que muestre por Vendedor: Sueldo Obtenido
|* y por la Zapatería: b) Promedio de Ventas y la mayor venta realizada.
|* Sueldo obtenido por el V001 es 1150
|* Sueldo obtenido por el V002 es 630
|* Sueldo obtenido por el V003 es 1327.50
|* Sueldo obtenido por el V003 es 1117.50
|* Promedio de ventas 3650
|* Mayor venta realizada 4750
|* La salida corresponde a los siguientes datos del vendedor (código del vendedor y monto
|* vendido)
|* (V001,150, 4000) (V002,130,2000) (V003,140,4750) (V004,155,3850)
*/
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