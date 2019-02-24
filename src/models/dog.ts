import { Animal } from "./animal";

export class Dog extends Animal {

    constructor(name: string, speed: 50){
        super(name, speed);
    }

    bark(): void{
        console.log(`${this.name} barks...`);
    }

}