interface Product{
    name:string,
    price:number,
    discountedPrice(percent: number),
}

class ShopProduct implements Product{
    name:string
    price:number

    constructor(Name:string,Price:number){
        this.name=Name;
        this.price=Price;
    }
    discountedPrice(percent: number) {
        let discount =this.price *(percent/100);
        return this.price - discount
    }
}

let laptop:Product = new ShopProduct ('Laptop',10000);
console.log(`The item your selected is ${laptop.name} and price is ${laptop.price}`);
console.log(`This is the discounted Price ${laptop.discountedPrice(25)}`);



////exercise 2;;;;

class Rectangle{
    width:number
    height:number

    constructor(Width:number,Height:number){
        this.width= Width;
        this.height=Height;

    }
    getArea():number{
        return  this.width * this.height;
    }

    getPerimeter():number{
        return 2 * (this.width+this.height)
    }
}

let rect:Rectangle = new Rectangle(4,6);

console.log(`The area is ${rect.getArea()}`)
console.log(`The perimeter is ${rect.getPerimeter()}`)