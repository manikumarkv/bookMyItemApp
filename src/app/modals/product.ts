export class Product {
    public id: number;
    public name: string;
    public code: string;
    public units: string;
    public unitPrice: number;
    public discount: number;
    constructor(id, name, code, units, unitPrice, discount) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.units = units;
        this.unitPrice = unitPrice;
        this.discount = discount;
    }
    getTotalWithoutDiscount(quantity: number): number {
        return quantity * this.unitPrice;
    }
    getTotalWithDiscount(quantity: number): number {
        return quantity * (this.unitPrice - this.discount);
    }
    getSavingAmount(quantity: number): number {
        return this.getTotalWithoutDiscount(quantity) - this.getTotalWithDiscount(quantity);
    }
}