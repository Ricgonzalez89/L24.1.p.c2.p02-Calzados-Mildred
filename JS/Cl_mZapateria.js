export default class Cl_mZapateria{
    constructor(){
        this.cntVenta = 0;
        this.acMontVenta = 0;
        this.mayor = 0;
    }

    procesarVendedor(v){
        this.cntVenta++;
        this.acMontVenta += v.venta;
        if (v.venta > this.mayor){
            this.mayor = v.venta;
        }
    }

    promedioVenta(){
        if (this.cntVenta > 0)
            return this.acMontVenta / this.cntVenta;
        else
            return 0;
    }

    devolverMayor(){
        return this.mayor;
    }
}