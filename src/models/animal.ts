export abstract class Animal {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;    
    }

    run(): void {
        console.log(`${this.name} run with a speed ${this.speed}`);
    };
}