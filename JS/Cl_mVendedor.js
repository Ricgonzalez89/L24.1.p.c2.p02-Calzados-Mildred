export default class Cl_mVendedor{
    constructor({cod, suelB, venta}){
        this.cod = cod;
        this.suelB = +suelB;
        this.venta = +venta;
    }

    set cod(cod){
        this._cod = cod;
    }

    set suelB(suelB){
        this._suelB = +suelB;
    }

    set venta(venta){
        this._venta = +venta;
    }

    get cod(){
        return this._cod;
    }

    get suelB(){
        return this._suelB;
    }

    get venta(){
        return this._venta;
    }

    suelTotal(){
        return this.suelB + (this.venta * 0.25);
    }
}