import { Tiger } from "./models/tiger";
import { Dog } from "./models/dog";

class Startup {
    public static main(): number {
        
        let myTiger = new Tiger("Bailey", 100);
        myTiger.roar();
        myTiger.run();

        let myDog = new Dog("Jasper", 50);
        myDog.bark();
        myDog.run();
    
        return 0;
    }
}

Startup.main();