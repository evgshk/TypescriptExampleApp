import { Animal } from "./animal";

export class Tiger extends Animal {
    constructor(name: string, speed: number) {      
        super(name, speed);    
    }

    roar(): void{
        console.log(`${this.name} roars...`);
    }
}