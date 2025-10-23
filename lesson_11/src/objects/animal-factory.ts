import { IAnimal } from '../abstractions/i-animal';
import { Cat } from './cat';
import { Dog } from './dog';
import { Pig } from './pig';

export class AnimalFactory {
    public static createCat(): IAnimal {
        return new Cat();
    }

    public static createDog(): IAnimal {
        return new Dog();
    }

    public static createPig(): IAnimal {
        return new Pig();
    }
}


