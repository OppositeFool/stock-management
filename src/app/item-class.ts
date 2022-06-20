export class ItemClass {
    private id: number;
     name: string;
     price: number;
     unit: string;

    constructor(id: number, name: string, price: number, unit: string)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this. unit = unit;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    getUnit(): string {
        return this.unit;
    }
}
