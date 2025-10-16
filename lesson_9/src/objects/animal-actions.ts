import { IAnimal } from '../abstractions/i-animal';

export class AnimalActions {
    public makeSound(animal: IAnimal): void {
        animal.makeSound();
    }

    public eat(animal: IAnimal): void {
        animal.eat();
    }

    public sleep(animal: IAnimal): void {
        animal.sleep();
    }

    public play(animal: IAnimal): void {
        animal.play();
    }

    public hunt(animal: IAnimal): void {
        animal.hunt();
    }
}


